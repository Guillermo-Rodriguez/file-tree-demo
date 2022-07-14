$(document).ready( function() {
    $('#file-tree-demo').fileTree(
    { 
        root: '/public/root/',
        script: './connectors/jqueryFileTree.php', 
    }, function(file) {
        alert(file);
    });
});