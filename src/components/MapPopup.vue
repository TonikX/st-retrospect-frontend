<template>
  <div
    class="popup"
  >
    <h3 class="popup__title">
      {{ relation.locationInstance.name }}
    </h3>
    <p class="popup__location-type">
      {{ relation.locationInstance.locationTypes[0].name }}
    </p>
    <p class="popup__address">
      {{ locationAddress }}
    </p>
    <p class="popup__quote">
      {{ relation.quote }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import Relation from '@/types/relation';

@Component
/**
 * Component of popup on map
 */
export default class MapPopup extends Vue {
  /**
   * LocationInstance object for popup
   */
  @Prop({ type: Object, required: true })
  private relation!: Relation;

  /**
   * Get location address in one string
   */
  get locationAddress(): string {
    const locationAddresses = this.relation.locationInstance.location.addresses;

    if (locationAddresses && locationAddresses.length) {
      return `${locationAddresses[0].street} ` +
        `${locationAddresses[0].build} ` +
        `${locationAddresses[0].homeNumber} ` +
        `${locationAddresses[0].housing}`.replace(/\s{2,}/g, ' ');
    }
    return '';
  }
}
</script>

<style>
  @import '../styles/custom-properties.css';

  .popup {
    min-width: 200px;
    max-width: 300px;
    padding: 0px 15px;

    &__title {
      @apply --font-serif-main;
      margin: 10px 0;

      color: #2D2D2D;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
    }

    &__location-type {
      @apply --font-sans-serif-light;
      margin: 0;

      color: #7c7c7c;
      font-size: 14px;
      line-height: 16px;
    }

    &__address, &__quote {
      @apply --font-sans-serif-light;
      margin-top: 0;

      color: #2D2D2D;
      font-size: 14px;
      line-height: 16px;
    }

    &__quote {
      @apply --custom-scroll;
      max-height: 200px;
      margin-top: 10px;
      padding-right: 10px;
      overflow-y: scroll;

      line-height: 20px;
    }
  }
</style>
