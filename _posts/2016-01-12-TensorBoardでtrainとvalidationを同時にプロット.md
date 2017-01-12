---
layout: post
title: TensorBoardでtrainとvalidationを同時にプロット
---

TensorBoardではスカラーサマリーで学習曲線を書くことができますが，パラメータチューニングの時などは学習データと開発データ両方の学習曲線を学習と同時にプロットしたい場合が良くあります．  
そんなときチュートリアルなどで書いてある `tf.summary.merge_all()` を使おうとするとはまるので，メモがてらにNotebookをおいておきます．

ちなみにtensorflowのバージョンは0.12です．これ以前のバージョンとはコードの互換性がないので注意してください．  
説明のためにMNISTのデータを使っています．validationデータがなかったので，やむおえずtestデータでプロットしています．


## import mnist dataset


```python
mnist = input_data.read_data_sets('MNIST_data', one_hot=True)
```

## build graph


```python
# None corresponds to the batch size
x = tf.placeholder(dtype=tf.float32, shape=[None, 784])
y_true = tf.placeholder(dtype=tf.float32, shape=[None, 10])
```


```python
# weight and bias
w = tf.Variable(tf.truncated_normal(shape=[784, 10]))
b = tf.Variable(tf.zeros([10]))
```


```python
# softmax layer
y_pred = tf.nn.softmax(tf.matmul(x,w) + b)
```


```python
cross_entropy = -tf.reduce_sum(y_true*tf.log(y_pred+1e-8))
```


```python
correct_prediction = tf.equal(tf.argmax(y_pred,1), tf.argmax(y_true,1))
accuracy = tf.reduce_mean(tf.cast(correct_prediction, tf.float32))
```


```python
train_op = tf.train.AdamOptimizer().minimize(cross_entropy)
```

## define summaries


```python
train_loss_op = tf.summary.scalar('train/loss', cross_entropy)
train_acc_op = tf.summary.scalar('train/acc', accuracy)
train_summary_op = tf.summary.merge([train_loss_op, train_acc_op])

test_loss_op = tf.summary.scalar('test/loss', cross_entropy)
test_acc_op = tf.summary.scalar('test/acc', accuracy)
test_summary_op = tf.summary.merge([test_loss_op, test_acc_op])
```

## define summary writer


```python
sess = tf.Session()
summary_writer = tf.summary.FileWriter('path_to_logdir', sess.graph)
```

## perform training


```python
sess.run(tf.global_variables_initializer())
for it in range(1000):
    batch = mnist.train.next_batch(100)
    train_feed = {x: batch[0], y_true: batch[1]}
    test_feed = {x: mnist.test.images, y_true: mnist.test.labels}
    sess.run(train_op, feed_dict=train_feed)
    
    # write summaries
    summary_str = sess.run(train_summary_op, feed_dict=train_feed)
    summary_writer.add_summary(summary_str, it)
    summary_str = sess.run(test_summary_op, feed_dict=train_feed)
    summary_writer.add_summary(summary_str, it)
    summary_writer.flush()
```
