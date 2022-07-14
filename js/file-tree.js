$(document).ready( function() {
    $('#file-tree-demo').fileTree(
    { 
        root: '/root/',
        script: './connectors/jqueryFileTree.php', 
    }, function(file) {
        alert(file);
    });
});