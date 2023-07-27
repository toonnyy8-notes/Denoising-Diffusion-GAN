---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Welcome to Slidev
---

## Tackling the Generative Learning Trilemma with 
# Denoising Diffusion GANs

#### Zhisheng Xiao$^1$, Karsten Kreis$^2$, Arash Vahdat$^2$  
#### $^1$The University of Chicago, $^2$NVIDIA


---

# The Generative Learning Trilemma

<br/>

<p class="text-2xl text-justify">
In the past decade, a plethora of deep generative models has been developed for various domains such as images, audios, point clouds and graphs.

However, current generative learning frameworks cannot yet simultaneously satisfy three key requirements,
- High-Quality Sampling,   
  <span v-click class="text-xl color-[#9f1239]">Variational Autoencoders (VAEs) and Normalizing Flows often suffer from low sample quality.</span>
- Mode Coverage and Sample Diversity, and   
  <span v-click class="text-xl color-[#9f1239]">Generative Adversarial Networks (GANs) are known for poor mode coverage.</span>
- Fast and Computationally Inexpensive Sampling.  
  <span v-click class="text-xl color-[#9f1239]">Sampling from Diffusion Model often requires thousands of neural network evaluations.</span>

</p>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Diffusion Models

<span class="text-2xl">Normal Distribution Assumption</span>

<p class="text-2xl text-justify">
In the generation framework introduced above, Diffusion Models requires a lot of generation time in exchange for high-quality sampling because its normal distribution assumption is only established when the step size is extremely small.

Building upon this premise, this study addresses the trilemma of generative learning by **REDUCING THE SAMPLING TIME** of Diffusion Models through the **MODIFICATION OF THE DENOISING DISTRIBUTION**.

By using GAN to model the denoising distribution of Diffusion Models, it changes from a normal distribution to a **MULTIMODAL DISTRIBUTION**, thereby reducing the number of sampling steps required.
</p>


<!--img class="m-auto w-4/7" src="/img/trilemma.gif" /-->


<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

<img class="w-3/5 m-auto" src="/img/trilemma.gif"/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
to address this issue, this study proposed Denoising Diffusion GAN
-->

---

# Denoising Distribution

<img class="m-auto w-3/4" src="/img/denoising-distribution.png"/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: image
image: /img/pipeline.gif
---

# Method

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Denoising Diffusion GAN

<div class="grid grid-cols-2">


<div class="text-center text-justify">

<p>

$$\begin{split}
p_{\theta}(x_{t-1}|x_t):=&\int p_{\theta}(x_0|x_t)q(x_{t-1}|x_t,x_0)dx_0\\
=&\int p(z) q(x_{t-1}|x_t,x_0=G_{\theta}(x_t,z,t))dz
\end{split}$$

</p>

<p v-click>

$$\begin{split}
\underset{\Large\Downarrow}{\sum_{t \ge 1}\mathbb{E}_{q(x_t)}[D_{KL}(q(x_{t-1}|x_t)||p_{\theta}(x_{t-1}|x_t))]+C}\\
\underset{\theta}{min}\sum_{t \ge 1}\mathbb{E}_{q(x_t)}[D_{adv}(q(x_{t-1}|x_t)||p_{\theta}(x_{t-1}|x_t))]
\end{split}$$

</p>

</div>

<img class="ml-auto w-9/10" src="/img/pipeline.gif" />

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Experiments

<span class="text-2xl">Sample Quality vs Sampling Time Trade-off.</span>

<img class="w-3/4 m-auto" src="/img/trade-off.png" />

---
layout: two-cols
---


<p class="text-2xl text-center">Ablation Studies on CIFAR-10.</p>

<img class="w-8/9 m-auto" src="/img/mode-coverage.png" />

<br/>

# Experiments

::right::

<p class="text-2xl text-center">Mode Coverage</p>

<img class="w-8/9 m-auto" src="/img/mode-coverage.png" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>


---

# Conclusions

<span class="text-2xl">Address Generative Learning Trilemma by Denoising Diffusion GAN</span>

<p class="text-2xl text-justify">

- High Quality & Mode Coverage  
  Advantages of Inheriting from Diffusion Models.

- Fast Sampling than Diffusion Model  
  Uses GAN to model the denoising distribution of the diffusion model as a multimodal distribution.

Denoising Diffusion GAN removes the normal distribution assumption and greatly reduces the required sampling steps.

</p>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
