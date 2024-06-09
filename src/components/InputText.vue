<script setup lang="ts">
const props = defineProps({
  placeholder: {
    default: "",
    type: String,
  },
  label: {
    default: "",
    type: String,
  },
  modelValue: {
    default: "",
    type: String,
  },
  required: {
    default: false,
    type: Boolean,
  },
  id: {
    default: "",
    type: String,
  },
  type: {
    default: "text",
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div class="form__group field">
    <input
      :type="props.type"
      class="form__field"
      :placeholder="props.placeholder"
      required
      :id="props.id"
      :name="props.id"
      :value="props.modelValue"
      @input="handleInput"
    />
    <label :for="props.id" class="form__label">{{ props.label }}</label>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/styles/colors.scss" as colors;

.form__group {
  position: relative;
  padding: 15px 0 0;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.6rem;
  color: colors.$darkGray;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: colors.$darkGray;
  font-weight: 700;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: colors.$darkGray;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 500;
  border-width: 3px;
  border-image: linear-gradient(to right, colors.$lightGray, colors.$gray);
  border-image-slice: 1;
}

.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
</style>
