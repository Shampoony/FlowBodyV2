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
            @swiper="onSwiperInit"
            @slideChange="onSlideChange"
          >
            <SwiperSlide v-for="(rate, index) in rates" :key="rate.id" class="v-rate__list-item">
              <div class="rate" :class="{ selected: activeIndex === index }">
                <div class="rate__inner">
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
                    <h3 class="rate__title">{{ rate.title }}</h3>
                    <h2 class="rate__price">{{ rate.price }}</h2>

                    <ul class="rate__list">
                      <li
                        v-for="(feature, index) in rate.features"
                        :key="index"
                        class="rate__list-item"
                      >
                        <p class="rate__subtitle">✓ {{ feature }}</p>
                      </li>
                    </ul>
                    <button class="rate__button">
                      {{ activeIndex === index ? 'Выбран' : 'Купить' }}
                    </button>
                  </div>
                </div>
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
import { ref } from 'vue'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import vFooter from '@/components/generalComponents/v-footer.vue'

const selectedRate = ref(null)

const rates = ref([
  {
    id: 1,
    title: 'Базовый',
    price: '20$',
    features: ['1 месяц доступ', 'План тренировок', 'План питания', 'Анализ результатов'],
  },
  {
    id: 2,
    title: 'Стандарт',
    price: '35$',
    features: ['1 месяц доступ', 'План тренировок', 'План питания', 'Анализ результатов'],
  },
  {
    id: 3,
    title: 'Премиум',
    price: '50$',
    features: ['1 месяц доступ', 'План тренировок', 'План питания', 'Анализ результатов'],
  },
])

const activeIndex = ref(0)
const swiperRef = ref(null)

const onSwiperInit = (swiper) => {
  swiperRef.value = swiper
  activeIndex.value = swiper.realIndex
}

const onSlideChange = () => {
  if (swiperRef.value) {
    activeIndex.value = swiperRef.value.realIndex
  }
}
</script>
