---
layout: post
title: kerasとpyenvとvirtualenv
---

機械学習ライブラリのkerasをpython仮想環境とともに導入する方法のメモです．
基本的に書いてあることは参考サイトと同じですが，一部補足してあります．


- pyenv
  - pythonの**バージョン**管理ツール
- virtualenv
  - python**ライブラリ**の管理ツール
  - virtualenv wrapper も使うと便利
- keras (python3)
  - theanoバックエンド

の導入方法です。

## virtualenv

### virtualenv導入
詳しくは[参考サイト](http://qiita.com/caad1229/items/325ca5c8ad198b0ebce7)を参照すべし

まずpipをインストール

``` console
sudo yum install python-pip
```

virtualenvとwrapperをインストール

```console
sudo pip install virtualenv
sudo pip install virtualenvwrapper
```

ちなみにvirtualenv wrapperはなくても使えますが，環境の切り替えがめちゃくちゃ楽になるので入れることを強く推奨します．  
このままではvirtualenv wrapperが動かないので，パスを通します．  

virtualenvwrapper.shの場所を調べましょう，たぶん場所は環境依存です．

``` console
find / -name "*virtualenvwrapper.sh"
```

以下を~/.bashrcに追記します．

``` 
source [さっき見つけたvirtualenvwrapper.shへのパス]
export WORKON_HOME=~/.virtualenvs
```

``` console
source ~/.bashrc
```

これでwrapperを含めてvirtualenvが使えるはずです。

### virtualenv使い方
virtualenvはpythonライブラリの管理ツールです．複数の環境を作れば複数のpythonライブラリ環境が構築できます．


``` console
mkvirtualenv foo
```

でfooという名前の環境が構築されます．コンソールの左端に `(foo)`が表示されれば成功です．  
しかし，これではシステムのライブラリ環境を引き継いでしまうので

``` console
mkvirtualenv --no-site-package foo
```

のように `--no-site-package` オプションをつけることが多いと思います．


``` console
mkvirtualenv --no-site-package -ppython3.4 foo
```

のようにpythonのバージョンまで指定して環境構築することもできます．

現環境のライブラリをリスト表示するには

``` console
lssitepackages
```


foo環境がアクティベートされている状態で

``` console
deactivate
```

すると環境から抜けることができます．

逆に環境をアクティベートするには

``` console
workon foo
```


ちなみに

``` console
workon
```

で環境を一覧表示できます．

環境を削除するときは、deactivateの状態で

``` console
rmvirtualenv foo
```


## pyenv

### pyenv導入
pyenvをインストールするためにはLinuxBrewが必要です．インストールしましょう．

``` console
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install)"
echo 'export PATH="$HOME/.linuxbrew/bin:$PATH"' >>~/.bash_profile
source .bash_profile
```

pyenvをインストール

``` console
brew install pyenv
echo 'export PATH="$HOME/.pyenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(pyenv init -)"' >> ~/.bash_profile
source .bash_profile
```

入りました。

### pyenv使い方

``` console
pyenv install -l
```

でpyenvに入れることができるpythonのバージョンを一覧表示してくれます．  
適当にバージョンを選んでインストール

``` console
pyenv install anaconda3-4.1.1
```

今回はanaconda3-4.1.1を選びました．

```console
pyenv virsion
pyenv virsions
```

で、今いる環境の名前を表示できます．

システムのpythonバージョンを変更するのは

``` console
pyenv global anaconda3-4.1.1
```

## keras
やっとpyenv virtualenv環境を構築できたのでkerasをインストールします。

### keras導入

``` console
pip3.4 install keras
```

これでpython3.4系のkeras環境（numpyやtheanoなども）が入ります。

``` console
python3 -c "import keras"
```

エラーが出なければ成功です。
