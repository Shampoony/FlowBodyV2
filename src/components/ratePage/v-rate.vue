<template>
  <div class="wrapper">
    <main class="v-rate">
      <div class="v-rate__cotainer container">
        <div class="v-rate__info info">
          <h1 class="v-rate__title title">Тарифы</h1>
          <p class="v-rate__subtitle subtitle">Выберите свой тариф</p>
        </div>
        <div class="v-rate__content">
          <swiper
            class="mySwiper v-rate__list"
            :slidesPerView="'auto'"
            :spaceBetween="20"
            :centeredSlides="true"
            :initialSlide="0"
            :loop="false"
          >
            <SwiperSlide class="v-rate__list-item rate">
              <div class="rate__wave-top">
                <div class="rate__image">
                  <img src="/src/assets/images/dumbell.svg" alt="" />
                </div>
                <svg
                  viewBox="0 0 100 60"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path d="M0,20 Q25,0 50,20 T100,20 L100,0 L0,0 Z" fill="#00e5c0" />
                  <path d="M0,35 Q25,-10 56,35 T100,35 L100,0 L0,0 Z" fill="#00e5c0" />
                </svg>
              </div>
              <div class="rate__content">
                <h3 class="rate__title">Базовый</h3>
                <h2 class="rate__price">20$</h2>

                <ul class="rate__list">
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ 1 месяц доступ</p>
                  </li>
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ План тренировок</p>
                  </li>
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ План питания</p>
                  </li>
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ Анализ результатов</p>
                  </li>
                </ul>
                <button class="rate__button">Купить</button>
              </div>
            </SwiperSlide>
            <SwiperSlide class="v-rate__list-item rate">
              <div class="rate__wave-top">
                <div class="rate__image">
                  <img src="/src/assets/images/dumbell.svg" alt="" />
                </div>
                <svg
                  viewBox="0 0 100 60"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path d="M0,20 Q25,0 50,20 T100,20 L100,0 L0,0 Z" fill="#00e5c0" />
                  <path d="M0,35 Q25,-10 56,35 T100,35 L100,0 L0,0 Z" fill="#00e5c0" />
                </svg>
              </div>
              <div class="rate__content">
                <h3 class="rate__title">Базовый</h3>
                <h2 class="rate__price">20$</h2>

                <ul class="rate__list">
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ 1 месяц доступ</p>
                  </li>
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ План тренировок</p>
                  </li>
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ План питания</p>
                  </li>
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ Анализ результатов</p>
                  </li>
                </ul>
                <button class="rate__button">Купить</button>
              </div>
            </SwiperSlide>
            <SwiperSlide class="v-rate__list-item rate">
              <div class="rate__wave-top">
                <div class="rate__image">
                  <img src="/src/assets/images/dumbell.svg" alt="" />
                </div>
                <svg
                  viewBox="0 0 100 60"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path d="M0,20 Q25,0 50,20 T100,20 L100,0 L0,0 Z" fill="#00e5c0" />
                  <path d="M0,35 Q25,-10 56,35 T100,35 L100,0 L0,0 Z" fill="#00e5c0" />
                </svg>
              </div>
              <div class="rate__content">
                <h3 class="rate__title">Базовый</h3>
                <h2 class="rate__price">20$</h2>

                <ul class="rate__list">
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ 1 месяц доступ</p>
                  </li>
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ План тренировок</p>
                  </li>
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ План питания</p>
                  </li>
                  <li class="rate__list-item">
                    <p class="rate__subtitle">✓ Анализ результатов</p>
                  </li>
                </ul>
                <button class="rate__button">Купить</button>
              </div>
            </SwiperSlide>
          </swiper>
        </div>
      </div>
    </main>
    <vFooter />
  </div>
</template>

<script setup>
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'

import vFooter from '@/components/generalComponents/v-footer.vue'
</script>
