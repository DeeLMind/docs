import{_ as t,K as h,L as d,M as e,N as a,a5 as n,W as o,F as r}from"./framework-edebdfe1.js";const c={},s=e("h1",{id:"深度学习",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#深度学习","aria-hidden":"true"},"#"),a(" 深度学习")],-1),u={class:"hint-container warning"},_=e("p",{class:"hint-container-title"},"DeeLMind 提示",-1),g={href:"https://mathph.org/",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"什么是深度学习",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是深度学习","aria-hidden":"true"},"#"),a(" 什么是深度学习")],-1),x=e("p",null,"深度学习，是机器学习，AI的一个分支，是十分重要的AI算法。",-1),m=o('<h1 id="深度学习主流算法" tabindex="-1"><a class="header-anchor" href="#深度学习主流算法" aria-hidden="true">#</a> 深度学习主流算法</h1><h2 id="卷积神经网络-convolutional-neural-networks-cnn" tabindex="-1"><a class="header-anchor" href="#卷积神经网络-convolutional-neural-networks-cnn" aria-hidden="true">#</a> 卷积神经网络（Convolutional Neural Networks, CNN）</h2><h3 id="_1-lenet-5" tabindex="-1"><a class="header-anchor" href="#_1-lenet-5" aria-hidden="true">#</a> 1. LeNet-5</h3><ul><li>描述：早期的卷积神经网络，用于手写数字识别。</li><li>应用：数字识别、字符识别等。</li></ul><h3 id="_2-alexnet" tabindex="-1"><a class="header-anchor" href="#_2-alexnet" aria-hidden="true">#</a> 2. AlexNet</h3><ul><li>描述：在ImageNet图像分类比赛中取得突破性成果的卷积神经网络。</li><li>应用：图像分类、目标检测等。</li></ul><h3 id="_3-vggnet" tabindex="-1"><a class="header-anchor" href="#_3-vggnet" aria-hidden="true">#</a> 3. VGGNet</h3><ul><li>描述：具有深层结构的卷积神经网络，通过小卷积核来构建深层网络。</li><li>应用：图像分类、风格迁移等。</li></ul><h3 id="_4-googlenet-inception" tabindex="-1"><a class="header-anchor" href="#_4-googlenet-inception" aria-hidden="true">#</a> 4. GoogLeNet (Inception)</h3><ul><li>描述：引入了Inception模块，通过多尺度卷积来提高网络性能。</li><li>应用：图像分类、目标检测等。</li></ul><h3 id="_5-resnet" tabindex="-1"><a class="header-anchor" href="#_5-resnet" aria-hidden="true">#</a> 5. ResNet</h3><ul><li>描述：使用残差学习，通过跳跃连接解决梯度消失问题，实现更深的网络。</li><li>应用：图像分类、物体检测、语义分割等。</li></ul><h3 id="_6-mobilenet" tabindex="-1"><a class="header-anchor" href="#_6-mobilenet" aria-hidden="true">#</a> 6. MobileNet</h3><ul><li>描述：轻量级卷积神经网络，适用于移动设备和嵌入式系统。</li><li>应用：移动端图像处理、实时物体检测等。</li></ul><h2 id="循环神经网络-recurrent-neural-networks-rnn" tabindex="-1"><a class="header-anchor" href="#循环神经网络-recurrent-neural-networks-rnn" aria-hidden="true">#</a> 循环神经网络（Recurrent Neural Networks, RNN）</h2><h3 id="_1-vanilla-rnn" tabindex="-1"><a class="header-anchor" href="#_1-vanilla-rnn" aria-hidden="true">#</a> 1. Vanilla RNN</h3><ul><li>描述：最基础的循环神经网络，具有短时记忆。</li><li>应用：自然语言处理、时间序列预测等。</li></ul><h3 id="_2-long-short-term-memory-lstm" tabindex="-1"><a class="header-anchor" href="#_2-long-short-term-memory-lstm" aria-hidden="true">#</a> 2. Long Short-Term Memory (LSTM)</h3><ul><li>描述：通过引入门控机制解决梯度消失问题，具有长时记忆能力。</li><li>应用：机器翻译、语音识别等。</li></ul><h3 id="_3-gated-recurrent-unit-gru" tabindex="-1"><a class="header-anchor" href="#_3-gated-recurrent-unit-gru" aria-hidden="true">#</a> 3. Gated Recurrent Unit (GRU)</h3><ul><li>描述：与LSTM类似，但参数更少，训练速度更快。</li><li>应用：自然语言处理、图像描述生成等。</li></ul><h2 id="生成对抗网络-generative-adversarial-networks-gan" tabindex="-1"><a class="header-anchor" href="#生成对抗网络-generative-adversarial-networks-gan" aria-hidden="true">#</a> 生成对抗网络（Generative Adversarial Networks, GAN）</h2><h3 id="_1-vanilla-gan" tabindex="-1"><a class="header-anchor" href="#_1-vanilla-gan" aria-hidden="true">#</a> 1. Vanilla GAN</h3><ul><li>描述：由生成器和判别器组成，通过对抗训练生成真实样本。</li><li>应用：图像生成、风格转换等。</li></ul><h3 id="_2-dcgan-deep-convolutional-gan" tabindex="-1"><a class="header-anchor" href="#_2-dcgan-deep-convolutional-gan" aria-hidden="true">#</a> 2. DCGAN (Deep Convolutional GAN)</h3><ul><li>描述：在GAN中引入卷积结构，提高图像生成的质量。</li><li>应用：人脸生成、艺术创作等。</li></ul><h3 id="_3-cyclegan" tabindex="-1"><a class="header-anchor" href="#_3-cyclegan" aria-hidden="true">#</a> 3. CycleGAN</h3><ul><li>描述：通过循环一致性损失实现两个域之间的图像转换。</li><li>应用：风格转换、图像翻译等。</li></ul><h2 id="强化学习-reinforcement-learning" tabindex="-1"><a class="header-anchor" href="#强化学习-reinforcement-learning" aria-hidden="true">#</a> 强化学习（Reinforcement Learning）</h2><h3 id="_1-q-learning" tabindex="-1"><a class="header-anchor" href="#_1-q-learning" aria-hidden="true">#</a> 1. Q-Learning</h3><ul><li>描述：基于值函数的强化学习方法，用于解决马尔可夫决策过程问题。</li><li>应用：游戏智能、机器人控制等。</li></ul><h3 id="_2-deep-q-network-dqn" tabindex="-1"><a class="header-anchor" href="#_2-deep-q-network-dqn" aria-hidden="true">#</a> 2. Deep Q Network (DQN)</h3><ul><li>描述：将深度学习引入Q-Learning，提高对复杂环境的适应能力。</li><li>应用：游戏智能、自动驾驶等。</li></ul><h3 id="_3-policy-gradient-methods" tabindex="-1"><a class="header-anchor" href="#_3-policy-gradient-methods" aria-hidden="true">#</a> 3. Policy Gradient Methods</h3><ul><li>描述：通过直接优化策略函数来学习决策策略。</li><li>应用：机器人控制、自然语言处理等。</li></ul><h2 id="transformer" tabindex="-1"><a class="header-anchor" href="#transformer" aria-hidden="true">#</a> Transformer</h2>',36);function N(b,p){const i=r("ExternalLinkIcon"),l=r("DocsAD");return h(),d("div",null,[s,e("div",u,[_,e("p",null,[e("a",g,[a("算法学习网站MathPH"),n(i)])])]),f,x,n(l),m])}const k=t(c,[["render",N],["__file","index.html.vue"]]);export{k as default};
