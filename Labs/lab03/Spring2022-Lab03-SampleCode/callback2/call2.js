function alertMessage(err,folderName ,data)
{
    if(err)
    {
        console.log('Error in reading folder \'' + folderName + '\'');
    }
    else
    {
        console.log('List files in folder \'' + folderName + '\' after sorting: '+JSON.stringify(data));
    }
}

var lib=require('./myLib')
lib.dirSorted('folder',alertMessage);
lib.dirSorted('folder-2',alertMessage);
