<script setup>
import Paragraph1 from "../text/Paragraph1.vue";
import Paragraph2 from "../text/Paragraph2.vue";
import Paragraph3 from "../text/Paragraph3.vue";

import intlTelInput from "intl-tel-input";
import Spinner from "../forms/Spinner.vue";
import { ref, onMounted } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const recaptchaToken = ref("");

const tumbler = ref(false);
const isSubmitting = ref(false);

const getRecaptchaToken = async () => {
  return new Promise((resolve, reject) => {
    if (typeof grecaptcha !== "undefined") {
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
    } else {
      reject(new Error("reCAPTCHA не загружен"));
    }
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
    FIELDS[UF_CRM_1707737542]=Polyus Consulting&
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
  const input = document.querySelector("#phone-input-open");
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
  <form @submit.prevent="submitForm">
    <div
      class="flex flex-row flex-wrap xl:items-end items-center md:justify-start justify-center"
    >
      <div
        class="xl:basis-4/12 lg:basis-5/12 md:basis-6/12 sm:basis-10/12 basis-full px-2"
      >
        <p class="mb-6">
          <Paragraph2>
            <input
              v-model="name"
              name="name"
              type="text"
              maxlength="29"
              required
              class="bg-gray-200 w-full h-8 rounded-[10px] p-9"
              :placeholder="$t('landing.forms.name')"
            />
          </Paragraph2>
        </p>
        <p class="lg:mb-0 mb-6">
          <Paragraph2>
            <input
              id="phone-input-open"
              type="tel"
              maxlength="30"
              required
              class="bg-gray-200 w-full h-8 rounded-[10px] p-9"
            />
          </Paragraph2>
        </p>
      </div>
      <div
        class="xl:basis-4/12 lg:basis-5/12 md:basis-6/12 sm:basis-10/12 basis-full px-2 lg:mb-0 mb-6"
      >
        <p class="mb-6">
          <Paragraph2>
            <input
              v-model="email"
              name="email"
              type="email"
              class="bg-gray-200 w-full h-8 rounded-[10px] p-9"
              :placeholder="$t('landing.forms.email')"
              required
            />
          </Paragraph2>
        </p>

        <p>
          <Paragraph2>
            <input
              v-model="message"
              type="text"
              class="bg-gray-200 w-full h-8 rounded-[10px] p-9"
              :placeholder="$t('landing.forms.message')"
            />
          </Paragraph2>
        </p>
      </div>
      <div
        class="lg:basis-5/12 md:basis-6/12 sm:basis-10/12 basis-full px-2 xl:hidden"
      >
        <Paragraph3>
          {{ $t("landing.block_7.p") }}
        </Paragraph3>
      </div>
      <div
        class="group xl:basis-2/12 lg:basis-5/12 md:basis-6/12 sm:basis-10/12 basis-full xl:hover:basis-4/12 px-2 xl:mt-0 mt-6"
      >
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full h-[72px] flex items-center bg-green-600 text-white rounded-[5px] group-hover:rounded-[100px] duration-300 group-hover:bg-gray-600 group-hover:text-black"
        >
          <Paragraph1 class="group-hover:float-left w-full text-center">
            <span v-if="!isSubmitting">
              <span v-if="!tumbler">
                {{ $t("landing.buttons.submit") }}
              </span>
              <span v-if="tumbler"> OK </span>
            </span>
            <span v-if="isSubmitting">
              <Spinner />
            </span>
          </Paragraph1>
          <p
            class="text-xs font-Unbounded-Blond hidden xl:group-hover:block 2xl:pe-16 pe-10"
          >
            {{ $t("landing.block_7.p") }}
          </p>
        </button>
      </div>
    </div>
  </form>
</template>
