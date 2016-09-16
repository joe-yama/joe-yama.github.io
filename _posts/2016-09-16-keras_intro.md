---
layout: post
title: kerasとpyenvとvirtualenv
---

# keras 導入方法
deep learningライブラリのkerasをpython仮想環境とともに導入する方法。
基本的に書いてあることは参考サイトと同じですが、一部補足してあります。
環境構築に手こずったので、メモっておきます。
紹介するのは

- pyenv
 - pythonのバージョン管理ツール
- virtualenv
 - python**ライブラリ**の管理ツール
 - virtualenv wrapper も使うと便利（切り替えが簡単になる）
- keras (python3)
 - theanoバックエンド

の導入方法です。

## virtualenv
### virtualenv導入
詳しくは[参考サイト](http://qiita.com/caad1229/items/325ca5c8ad198b0ebce7)を参照すべし

まずpipをインストール（ubuntuの場合は s/yum/apt-get/ ）

``` console
sudo yum install python-pip
```
virtualenvとwrapperをインストール

```console
sudo pip install virtualenv
sudo pip install virtualenvwrapper
```

ちなみにvirtualenv wrapperはなくても使えるが、環境の切り替えがめちゃくちゃ楽になるので、入れることを強く推奨します

このままではvirtualenv wrapperが動かないので、パスを通します。

まず、virtualenvwrapper.shの場所を調べましょう。たぶん場所は環境依存です。

``` console
find / -name "*virtualenvwrapper.sh"
```

パスを通すために以下を~/.bashrcに追記します。

``` sh:~/.bashrc
source [さっき見つけたvirtualenvwrapper.shへのパス]
export WORKON_HOME=~/.virtualenvs
```

``` console
source ~/.bashrc
```

これでwrapperを含めてvirtualenvが使えるはずです。

### virtualenv使い方
virtualenvはpythonライブラリの管理ツールです。複数の環境を作れば複数のpythonライブラリ環境が構築できます。

基本的には

``` console
mkvirtualenv foo
```

でfooという名前の環境が構築されます。コンソールの左端に `(foo)`が表示されれば成功です。

しかし、これではシステムのライブラリ環境を引き継いでしまうので、

``` console
mkvirtualenv --no-site-package foo
```

のように `--no-site-package` オプションをつけることが多いと思います。

ちなみに私は

``` console
mkvirtualenv --no-site-package -ppython3.4 foo
```

のようにpythonのバージョンまで指定して環境構築しています。

現環境のライブラリをリスト表示するには

``` console
lssitepackages
```

です。

foo環境がアクティベートされている状態で

``` console
deactivate
```

すると環境から抜けることができます。

環境をアクティベートするには

``` console
workon foo
```

だけでおｋです。
ちなみに

``` console
workon
```

で環境を一覧表示できます。

環境を削除するときは、deactivateの状態で

``` console
rmvirtualenv foo
```

です。

## pyenv
### pyenv導入
pyenvをインストールするためにはLinuxBrewが必要です。インストールしましょう。

``` console
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install)"
```

パスを通します。

``` console
echo 'export PATH="$HOME/.linuxbrew/bin:$PATH"' >>~/.bash_profile
source .bash_profile
```

これでLinuxBrewが使えます。

ようやくpyenvのインストールです。

``` console
brew install pyenv
```

先と同様パスを通します。

``` console
echo 'export PATH="$HOME/.pyenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(pyenv init -)"' >> ~/.bash_profile
source .bash_profile
```

入りました。

### pyenv使い方

``` console
pyenv install -l
```

でpyenvに入れることができるpythonのバージョンを一覧表示してくれます。

さっそく入れましょう。

``` console
pyenv install anaconda3-4.1.1
```

今回はanaconda3-4.1.1を選びました。

```console
pyenv virsion
```

で、今いる環境の名前を表示できます。

``` console
pyenv versions
```

で、すべてのpyenv環境を一覧表示できます。

``` console
pyenv global anaconda3-4.1.1
```

で環境をアクティベートすることができます。

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

デフォルトではtheanoバックエンドです。
