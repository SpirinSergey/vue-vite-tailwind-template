<script setup>
import intlTelInput from "intl-tel-input";
import BlackGrayButton from "../buttons/Small.vue";
import Spinner from "./Spinner.vue";
import { ref, onMounted } from "vue";
import Paragraph1 from "../text/Paragraph1.vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const recaptchaToken = ref("");

const tumbler = ref(false);
const isSubmitting = ref(false);

const getRecaptchaToken = async () => {
  return new Promise((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha
        .execute("6LffnfUpAAAAAMSpldmKkHJSmV9RqTTJRVPAJRI8", {
          action: "submit",
        })
        .then((token) => {
          resolve(token);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

const submitForm = async (event) => {
  event.preventDefault();
  isSubmitting.value = true;

  try {
    recaptchaToken.value = await getRecaptchaToken();

    const url = `https://crm.zone24.space/rest/1/vrrkeopa60sdhbvr/crm.lead.add.json?
    FIELDS[TITLE]=Polyus Consulting - ${name.value}&
    FIELDS[NAME]=${name.value}&
    FIELDS[EMAIL][0][VALUE]=${email.value}&
    FIELDS[PHONE][0][VALUE]=${phone.value}&
    FIELDS[UF_CRM_1707737542]=Test&
    FIELDS[UF_CRM_1707737108]=${message.value}&
    g-recaptcha-response=${recaptchaToken.value}`;

    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    tumbler.value = true;
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    isSubmitting.value = false;
  }
};

const initIntlTelInput = () => {
  const input = document.querySelector("#phone-input");
  const iti = intlTelInput(input, {
    initialCountry: "us",
    allowDropdown: true,
    autoInsertDialCode: true,
    containerClass: "int-tel-container",
    countrySearch: true,
    fixDropdownWidth: false,
    formatAsYouType: true,
    formatOnDisplay: true,
    hiddenInput: () => "phone_full",
    placeholderNumberType: "MOBILE",
    autoFormat: true,
    showFlags: true,
    showSelectedDialCode: true,
    nationalMode: true,
    separateDialCode: true,
    singleDialCode: true,
    utilsScript: "../../../node_modules/intl-tel-input/build/js/utils.js",
  });

  input.addEventListener("blur", () => {
    phone.value = iti.getNumber();
  });
};

onMounted(() => {
  initIntlTelInput();
});
</script>

<template>
  <div
    class="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-75 duration-300"
    @click="handleClickOutside"
  >
    <div
      class="relative rounded-[10px] bg-white px-5 pb-10 pt-5 shadow-lg w-[410px]"
      @click.stop
    >
      <div class="flex justify-end">
        <button
          @click="$emit('close')"
          class="hover:text-gray-500 duration-300 focus:outline-none z-10"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <slot></slot>
      <form @submit="submitForm" class="mt-5">
        <div class="mb-4">
          <input
            v-model="name"
            name="name"
            class="h-12 w-full rounded-[5px] border border-black p-4"
            type="text"
            maxlength="29"
            :placeholder="$t('landing.forms.name')"
            required
          />
        </div>
        <div class="mb-4">
          <input
            id="phone-input"
            class="h-12 w-full rounded-[5px] border border-black p-4"
            type="tel"
            maxlength="30"
            required
          />
        </div>
        <div class="mb-4">
          <input
            v-model="email"
            class="h-12 w-full rounded-[5px] border border-black p-4"
            name="email"
            type="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            :placeholder="$t('landing.forms.email')"
            required
          />
        </div>
        <div class="mb-4">
          <input
            v-model="message"
            class="h-12 w-full rounded-[5px] border border-black p-4"
            name="message"
            type="text"
            :placeholder="$t('landing.forms.message')"
          />
        </div>
        <div class="flex flex-row flex-wrap items-end">
          <div class="basis-full mb-5">
            <p>
              {{ $t("landing.block_7.p") }}
            </p>
          </div>
          <div class="basis-1/2 pe-5">
            <p v-if="tumbler">
              <Paragraph1>Successfully</Paragraph1>
            </p>
          </div>
          <div class="basis-1/2 text-end">
            <BlackGrayButton
              v-if="!tumbler"
              type="submit"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">
                {{ $t("landing.buttons.submit") }}
              </span>
              <span v-if="isSubmitting">
                <Spinner />
              </span>
            </BlackGrayButton>
            <BlackGrayButton v-if="tumbler" @click="$emit('close')">
              OK
            </BlackGrayButton>
          </div>
        </div>
      </form>
      <img
        src="/img/icons/vertical_lines.svg"
        class="absolute top-0 right-0 transform -scale-x-100"
        alt=""
      />
      <img v-if="!tumbler"
        src="/img/icons/double_arrow.svg"
        class="absolute bottom-[46px] left-[25px] transform -rotate-90 h-[24px] w-auto"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickOutside(event) {
      if (event.target === this.$el) {
        this.$emit("close");
      }
    },
  },
};
</script>
