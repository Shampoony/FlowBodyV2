<template>
  <footer class="v-footer">
    <div class="v-footer__container container">
      <ul class="v-footer__list">
        <li class="v-footer__list-item footer-link">
          <router-link :to="{ name: 'rate' }">
            <div class="footer-link__image">
              <img src="../../assets/images/icons/food.svg" alt="" />
            </div>
            <div class="footer-link__title">Питание</div>
          </router-link>
        </li>
        <li class="v-footer__list-item footer-link">
          <router-link :to="{ name: 'rate' }">
            <div class="footer-link__image">
              <img src="../../assets/images/icons/gym.svg" alt="" />
            </div>
            <div class="footer-link__title">Тренировки</div>
          </router-link>
        </li>
        <li class="v-footer__list-item footer-link">
          <router-link :to="{ name: 'rate' }">
            <div class="footer-link__image">
              <img src="../../assets/images/icons/schedule.svg" alt="" />
            </div>
            <div class="footer-link__title">Расписание</div>
          </router-link>
        </li>
        <li class="v-footer__list-item footer-link">
          <router-link :to="{ name: 'rate' }">
            <div class="footer-link__image">
              <img src="../../assets/images/icons/profile.svg" alt="" />
            </div>
            <div class="footer-link__title">Профиль</div>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script setup></script>
