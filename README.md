# Babel

## To use

```
$ npm install -g babel
$ babel input.js --out-file output.js
```

## Options

--out-file (省略 : -o) : 出力するファイル名の指定を行う。

--watch : コンパイルの監視。

--blacklist : 変換せずにそのまま使用したい場合。

--whitelist : 指定するTransformer以外を変換させない場合。

## To use --blacklist option

Arrow Functionであればes6.arrowFunctions、Class構文であればes6.classesというTransformerを利用する。

```
$ babel inputArrowFnc.js --blacklist 'es6.arrowFunctions' -o outputArrowFnc.js
```


