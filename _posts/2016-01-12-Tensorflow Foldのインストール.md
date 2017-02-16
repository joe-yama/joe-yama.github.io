---
layout: post
title: Tensorflow Foldのインストール
---

Tensorflow Foldのubuntuでのインストールメモです．

# Tensorflow Foldとは？

素のTensorflowはの計算グラフはdefine and runなので，入力によって計算グラフが動的に変化するネットワーク （Tree-LSTMなど） を構築することができません．
define and runは多くの伝統的な機械学習ライブラリ （e.g. Theano, Caffe） などで採用されています．

これに対してTensorflow Foldではdefine by runといって入力ごとに計算グラフを定義しています．計算グラフを動的に変更できるというわけです．
define by runはChainerやDyNetで採用されています．
詳しくは[論文](https://openreview.net/pdf?id=ryrGawqex)で．

# インストール

python3.3+ GPU版で，CUDAなどはインストールされている前提です．  
Anacondaで環境構築します．

```sh
conda create -n tf-fold
pip install tensorflow-gpu
pip install https://storage.googleapis.com/tensorflow_fold/tensorflow_fold-0.0.1-py3-none-linux_x86_64.whl

python3 -c "import tensorflow_fold"
```

これが通れば成功です．
