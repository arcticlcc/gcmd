var GCMD;

GCMD = {
    init : function() {

        //make root unselectable
        GCMD.json[0].selectable = false;
        GCMD.autosize($('#tree-selected'));

        var $tree = $('#tree');

        $tree.treeview({
            data : GCMD.json,
            showTip : true,
            multiSelect : true,
            selectedBackColor : '#5AB031',
            onNodeSelected : GCMD.updateSelection,
            onNodeUnselected : GCMD.updateSelection
        });

        //tooltips
        $('[data-toggle="tooltip"]').tooltip();

        //jquery events
        $('#btn-clear').on('click', GCMD.clearSelection);

        $('#btn-search').on('click', GCMD.search);
        //$('#input-search').on('keyup', GCMD.search);

        $('#input-search').keypress(function(event) {
            if (event.keyCode == 13) {
                GCMD.search();
            }
        });

        $('#btn-clear-search').on('click', function(e) {
            $tree.treeview('clearSearch');
            $('#input-search').val('');
            $('#search-output').fadeTo(300, 0, function() {
                $(this).html('');
            });
        });

        $('#tree-selected').focus(function(e) {
            e.target.select();
            jQuery(e.target).one('mouseup', function(e) {
                e.preventDefault();
            });
        });

        $('#chk-fullpath').on('change', GCMD.updateSelection);

        $('#input-delimiter input').on('input', function() {
            GCMD.updateSelection();
        });

        $('#input-delimiter li a').on('click', function() {
            var $this = $(this);

            $('#input-delimiter input').val($this.attr('data-value'));
            GCMD.updateSelection();
        });

        //remove loader
        $('#loader').fadeOut('slow');
    },

    updateSelection : function(event, data) {
        var selected = $('#tree').treeview(true).getSelected();
        var full = $('#chk-fullpath').is(':checked');
        var text = '';
        var l = selected.length - 1;
        var delim = $('#input-delimiter input').val();
        //account for metacharacters
        if (delim) {
            var meta = {
                '\\t' : '\t',
                '\\r' : '\r',
                '\\n' : '\n',
                '\\v' : '\v',
                '\\f' : '\f'
            };
            var regx = new RegExp('(\\' + Object.keys(meta).join(')|(\\') + ')');
            var match = delim.match(regx);

            if (match) {
                delim = meta[match[0]];
            }
        } else {
            delim = '\n';
        }

        //clear selected search results
        $('#search-output li').toggleClass('node-selected', false);

        selected.forEach(function(el, idx, arr) {
            var txt = full ? el.path.replace(/Science Keywords \> /, '') : el.text;
            text += txt + (idx !== l ? delim : '');
            //update search result items
            $('#sel-' + el.nodeId).toggleClass('node-selected');
        });
        GCMD.autosize.update($('#tree-selected').text(text));
    },

    clearSelection : function() {
        var tv = $('#tree').treeview(true);
        var selected = tv.getSelected();

        selected.forEach(function(el, idx) {
            tv.unselectNode(el);
        });

    },

    search : function(e) {
        var pattern = $('#input-search').val();
        var options = {
            revealResults : $('#chk-reveal-results').is(':checked'),
            exactMatch : $('#chk-exact-match').is(':checked'),
            ignoreCase : true
        };

        $('#search-output').fadeTo(300, 0, function() {
            var $so = $(this);
            var results = $('#tree').treeview('search', [pattern, options]);

            var output = '<p>' + results.length + ' matches found</p><ul class="list-group">';
            results.forEach(function(result, idx) {
                var text = result.text.replace(new RegExp(pattern, 'gi'), '<b>' + pattern.toUpperCase() + '</b>');
                var selected = result.state.selected ? ' node-selected' : '';
                var path = result.path.replace(/Science Keywords \> /, '').replace(new RegExp(result.text), '<span class="text-info">' + text + '</span>');
                output += '<li class="list-group-item node-tree'+ selected +'" id="sel-' + result.nodeId + '" data-nodeid="' + result.nodeId + '">' + path + '</li>';
            });
            output += '</ul>';
            $so.fadeTo(300, 1);
            $so.html(output);

            $('#search-output li').on('click', function() {
                var $this = $(this);
                var nodeId = Number($this.attr('data-nodeid'));

                if ($this.hasClass('node-selected')) {
                    $('#tree').treeview('unselectNode', [nodeId]);

                } else {
                    $('#tree').treeview('selectNode', [nodeId]);

                }
                //$this.toggleClass('node-selected');

            });
        });
    }
};
module.exports = GCMD;
