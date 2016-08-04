//node笔记
//file系统
var fs=reqiure('fs');//初始化

/*
* fs.open(path, flags, [mode], callback)
*   path : 要打开的文件的路径
*   flags : 打开文件的方式 读/写  r/r+
*   mode : 设置文件的模式 读/写/执行  4/2/1
*   callback : 回调
*       err : 文件打开失败的错误保存在err里面，如果成功err为null
*       fd : 被打开文件的标识，和定时器
* */
fs.open('1.txt', 'r', function(err, fd) {

    //console.log(err);
    //console.log(fd);

    if (err) {
        console.log( '文件打开失败' );
    } else {
        console.log( '文件打开成功' );
        console.log( fd );
    }

});


//同步
var fd = fs.openSync('1.txt', 'r');

console.log(fd);


//读文件
fs.open('1.txt', 'r', function(err, fd) {

    if (err) {
        console.log('文件打开失败');
    } else {

        //读取文件
        /*
        * fs.read(fd, buffer, offset, length, position, callback)
        *   fd : 通过open方法成功打开一个文件返回的编号
        *   buffer : buffer对象
        *   offset : 新的内容添加到buffer中的起始位置
        *   length ： 添加到buffer中内容的长度  只有在创建buffer下有用
        *   position ：读取的文件中的起始位置
        *   callback : 回调
        *       err
        *       buffer的长度
        *       buffer对象
        * */

        var bf1 = new Buffer('123456789');

        console.log(bf1);

        fs.read( fd, bf1, 0, 4, null, function( err, len, newBf ) {

            console.log( bf1 );
            console.log( len );
            console.log( newBf );

        } );

    }

});


//写文件

var fs = require('fs');

fs.open('1.txt', 'r+', function(err, fd) {

    /*
    * 当我们要对打开的文件进行写操作的时候，打开文件的模式应该是  读写  方式
    *
    * fs.write(fd, buffer, offset, length[, position], callback)
    *   fd : 打开的文件
    *   buffer : 要写入的数据
    *   offset : buffer对象中要写入的数据的起始位置
    *   length : 要写入的buffer数据的长度
    *   position : fd中的起始位置
    *   callback : 回调
    * */

    if (err) {
        console.log('打开文件失败')
    } else {

        /*var bf = new Buffer('123');

        fs.write( fd, bf, 0, 3, 5, function() {
            console.log(arguments);
        } );*/

        fs.write( fd, '1234', 5, 'utf-8' );

        fs.close( fd, function() {



        } );

    }

});

//创建文件
var fs = require('fs');

var filename = '2.txt';

/*
* 向一个指定的文件中写入数据，如果该文件不存在，则新建，如果存在则新的内容会覆盖原有的文件内容
* */

/*
fs.writeFile(filename, 'miaov', function() {
    console.log(arguments);
})*/

/*fs.appendFile(filename, '-leo', function() {
    console.log(arguments);
})*/


/*fs.exists( filename, function(isExists) {
    //console.log(isExists);

    if (!isExists) {
        fs.writeFile(filename, 'miaov', function(err) {
            if (err) {
                console.log('出错了');
            } else {
                console.log('创建新文件成功');
            }
        })
    } else {
        fs.appendFile(filename, '-leo', function(err) {
            if (err) {
                console.log('新的内容追加失败');
            } else {
                console.log('新内容追加成功');
            }
        })
    }

} );*/


if ( !fs.existsSync(filename) ) {
    fs.writeFileSync(filename, 'miaov');
    console.log('新文件创建成功');
} else {
    fs.appendFileSync(filename, '-leo')
    console.log('新内容追加成功')
}


//读取文件
/*
fs.readFile('2.txt', function(err, data) {
    //console.log(arguments);

    if (err) {
        console.log('文件读取失败');
    } else {
        console.log( data.toString() );
    }

});*/

/*fs.unlink('2.txt', function(err) {
    if (err) {
        console.log('删除失败');
    } else {
        console.log('删除成功');
    }
})*/

/*fs.rename('2.txt', '2.new.txt', function() {
    console.log(arguments);
})*/

/*fs.stat('2.new.txt', function() {
    console.log(arguments);
})*/


//监听文件变化，不稳定
//返回change,rename等以及文件路径
var fs = require('fs');

var filename = '2.new.txt';

fs.watch(filename, function(ev, fn) {
    console.log(ev);

    if (fn) {
        console.log(fn + ' 发生了改变');
    } else {
        console.log('....');
    }

});













