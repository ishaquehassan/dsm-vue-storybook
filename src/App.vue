<template>
  <div id="app">
    <a-g-full-width-page>
      <template v-slot:toolbar>
        <AGHeader>
          <AGButtonDropDown :items="ddOptions">
            <template v-slot:label>Hello</template>
            <AGDropDownButtonItem
              v-for="(item, index) in ddOptions"
              :key="index"
              :icon="item.icon"
              :name="item.name"
              @click="onDDClick(index)"
            />
          </AGButtonDropDown>
        </AGHeader>
      </template>
      <template v-slot:side-menu>
        <AGSideMenu :items="ddOptions">
          <AGSideMenuItem
            v-for="(item, index) in ddOptions"
            :key="index"
            :icon="item.icon"
            :name="item.name"
          />
        </AGSideMenu>
      </template>
      <template v-slot:content-area>
        <div class="login_wrapper">
          <div class="login_box">
            <AGLogo is-small />
            <h5>Welcome to <span>Aeroglobe</span></h5>
            <p>Sign in to your account to continue...</p>
            <form>
              <AGTextField v-model="email" label="Email" />
              <AGTextField v-model="email" label="Password" />
              <div class="forgot_card">
                <AGButton type="link">Forgot password</AGButton>
              </div>
              <div class="d-grid">
                <AGButton type="primary">Log In</AGButton>
              </div>
            </form>
          </div>
        </div>
      </template>
    </a-g-full-width-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AGFullWidthPage from "@/components/pages/AGFullWidthPage";
import AGHeader from "@/components/atoms/AGHeader";
import AGButtonDropDown from "@/components/molecules/AGButtonDropDown";
import AGSideMenu from "@/components/organisms/AGSideMenu";
import AGSideMenuItem from "@/components/molecules/AGSideMenuItem";
import AGDropDownButtonItem from "@/components/atoms/AGDropDownButtonItem";
import AGLogo from "@/components/atoms/AGLogo";
import AGButton from "@/components/atoms/AGButton";
import AGTextField from "@/components/atoms/AGTextField/AGTextField.vue";

export default defineComponent({
  components: {
    AGTextField,
    AGDropDownButtonItem,
    AGFullWidthPage,
    AGHeader,
    AGButtonDropDown,
    AGSideMenu,
    AGSideMenuItem,
    AGLogo,
    AGButton,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onDDClick(i) {
      alert("a" + i);
    },
  },
  computed: {
    ddOptions() {
      return [
        {
          name: "Item1",
          icon: require("./assets/images/logout.svg"),
        },
        {
          name: "Item1",
          icon: require("./assets/images/logout.svg"),
        },
        {
          name: "Item1",
          icon: require("./assets/images/logout.svg"),
        },
        {
          name: "Item1",
          icon: require("./assets/images/logout.svg"),
        },
        {
          name: "Item1",
          icon: require("./assets/images/logout.svg"),
        },
      ];
    },
  },
  name: "App",
});
</script>

<style lang="scss">
//Sidebar css

.sidebar_wrap {
  width: 265px;
  z-index: 1002;
  bottom: 0;
  margin-top: 0;
  position: fixed;
  padding: 15px 20px;
  background: #ffffff;
  border-right: red;
  top: 0;
  left: 0;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
  overflow-y: auto;

  .logo {
    padding-top: 15px;
    padding-bottom: 30px;
    text-align: center;

    img {
      &:first-child {
        margin-right: 10px;
      }
    }
  }

  h6 {
    opacity: 0.5;
    text-transform: uppercase;
    color: red;
    margin-bottom: spacing(2);
  }

  ul {
    @include reset-style;
    margin-bottom: spacing(5);
    border-top: 2px solid $sidebar-menu-border-color;
    padding-top: spacing(5);

    li {
      @include reset-style;
      display: block;

      a {
        font-size: 14px;
        display: block;
        position: relative;
        color: $secondary-color;
        padding: 10px 5px;
        display: flex;
        align-items: center;
        padding-left: spacing(6);
        font-weight: $font-weight-semi-bold;
        border-radius: $border-radius-8;
        text-decoration: none;
        margin-bottom: 7px;
        text-align: left;

        i {
          position: absolute;
          left: 15px;
          line-height: 0.3;
        }
      }

      a.router-link-exact-active,
      a.active,
      a:hover {
        background-color: $green-color;
        color: $white-color;

        i {
          img {
            filter: brightness(0) invert(1);
          }
        }
      }

      &:last-child {
        padding-top: spacing(2.5);
        margin-top: spacing(2.5);
        border-top: 2px solid $sidebar-menu-border-color;

        a {
        }
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 766px) {
    width: 90px;
    left: -90px;
    padding: 15px 13px;
    text-align: center;
    .logo {
      img {
        width: 60px;
      }
    }
    ul {
      li {
        padding: 20px 0px;
        display: flex;
        justify-content: center;

        span {
          display: none;
        }
      }
    }
  }
}

#app {
  font-family: $primary-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $secondary-color;
  background-color: #e3e3e3;
}

.login_wrapper {
  min-height: calc(100vh - 72px);
  background-color: $login-screen-color;
  @include vertically-horizontally-center;
  padding: spacing(6) spacing(3);
}

.login_box {
  background: $white-color;
  box-shadow: $shadow_login;
  border-radius: $border_radius_16;
  width: 600px;
  min-height: 631px;
  padding: spacing(4);
  position: relative;
  @include vertically-center;

  h5 {
    font-size: 24px;
    color: $primary-color;
    font-weight: $font-weight-semi-bold;
    margin-bottom: spacing(2);

    span {
      color: $green-color;
    }
  }

  p {
    margin-bottom: spacing(5);
    font-size: 14px;
  }

  img {
    margin-bottom: spacing(3);
    height: 54px;
  }
}
</style>
