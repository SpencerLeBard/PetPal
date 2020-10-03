<template>
  <div class="container-fluid bg-light">
    <div class="row getStarted">
      <div
        class="col-12 d-flex flex-column h-100 text-center justify-content-center"
      >
        <!-- <form>
          <p>
            Welcome to PetPal! Let's grab some information before we find your
            new best friend
          </p>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="What's your first name?"
            />
          </div>
          <button class="btn btn-outline-warning mt-3">
            Next
          </button>
        </form> -->
        <form id="nl-form" class="nl-form">
          My Name is
          <input
            type="text"
            value=""
            placeholder=""
            data-subline="For example: <em>Los Angeles</em> or <em>New York</em>"
          />
          <br />
          I feel like adopting a
          <select>
            <option value="1" selected>No Preference</option>
            <option value="2">Dog</option>
            <option value="3">Cat</option>
            <option value="4">Horse</option>
            <option value="2">Lot Lizard</option>
          </select>
          today!
          <div class="nl-submit-wrap">
            <button class="nl-submit" type="submit">
              Find your best friend!
            </button>
          </div>
          <div class="nl-overlay"></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {},
  computed: {},
  props: [""],
  components: {},
  methods: {},
};
</script>

<style>
.getStarted {
  height: 93vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
}
.nl-form {
  width: 100%;
  margin: 0.3em auto 0 auto;
  font-size: 4em;
  line-height: 1.5;
}
.nl-form ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.nl-form input,
.nl-form select,
.nl-form button {
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  font-weight: inherit;
  line-height: inherit;
  display: inline-block;
  padding: 0;
  margin: 0;
}
.nl-form input:focus {
  outline: none;
}
.nl-field {
  display: inline-block;
  position: relative;
}
.nl-field.nl-field-open {
  z-index: 10000;
}
.nl-field-toggle,
.nl-form input,
.nl-form select {
  line-height: inherit;
  display: inline-block;
  color: #b14943;
  cursor: pointer;
  border-bottom: 1px dashed #b14943;
}
.nl-field ul {
  position: absolute;
  visibility: hidden;
  background: #76c3bd;
  left: -0.5em;
  top: 50%;
  font-size: 80%;
  opacity: 0;
  transform: translateY(-40%) scale(0.9);
  transition: visibility 0s 0.3s, opacity 0.3s, transform 0.3s;
}

.nl-field.nl-field-open ul {
  visibility: visible;
  opacity: 1;
  transform: translateY(-50%) scale(1);
  transition: visibility 0s 0s, opacity 0.3s, transform 0.3s;
}
.nl-field ul li {
  color: #fff;
  position: relative;
}

.nl-dd ul li {
  padding: 0 1.5em 0 0.5em;
  cursor: pointer;
  white-space: nowrap;
}

.nl-dd ul li.nl-dd-checked {
  color: #478982;
}

.no-touch .nl-dd ul li:hover {
  background: rgba(0, 0, 0, 0.05);
}

.no-touch .nl-dd ul li:hover:active {
  color: #478982;
}
.nl-dd ul li.nl-dd-checked:before,
.nl-submit:before,
.nl-field-go:before {
  font-family: "nlicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
}

.nl-dd ul li.nl-dd-checked:before {
  content: "e000";
  position: absolute;
  right: 1em;
  font-size: 50%;
  line-height: 3;
}
.nl-ti-text ul {
  min-width: 8em;
}
.nl-ti-text ul li.nl-ti-input input {
  width: 100%;
  padding: 0.2em 2em 0.2em 0.5em;
  border-bottom: none;
  color: #fff;
}
.nl-form .nl-field-go {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
  width: 1.8em;
  text-align: center;
  color: transparent;
}
.nl-field-go:before {
  font-size: 75%;
  color: #fff;
  width: 100%;
  line-height: 2.5;
  display: block;
}
input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.8);
}

input:active::-webkit-input-placeholder,
input:focus::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.2);
}

input::-moz-placeholder {
  color: rgba(255, 255, 255, 0.8);
}

input:active::-moz-placeholder,
input:focus::-moz-placeholder {
  color: rgba(255, 255, 255, 0.2);
}

input:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.8);
}

input:active::-ms-input-placeholder,
input:focus::-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.2);
}
.nl-ti-text ul li.nl-ti-example {
  font-size: 40%;
  font-style: italic;
  font-weight: 400;
  padding: 0.4em 1em;
  color: rgba(0, 0, 0, 0.2);
  border-top: 1px dashed rgba(255, 255, 255, 0.7);
}

.nl-ti-text ul li.nl-ti-example em {
  color: #fff;
}
.nl-submit-wrap {
  margin-top: 0.4em;
}

.nl-form .nl-submit {
  line-height: 3;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  background: #76c3bd;
  color: #fff;
  padding: 0 1em 0 0;
  font-size: 40%;
  font-weight: bold;
  letter-spacing: 3px;
}

.nl-submit:before {
  color: #fff;
  float: left;
  padding: 0 0.7em;
  margin: 0 0.8em 0 0;
  background: #69b1a9;
}

.no-touch .nl-form .nl-submit:hover,
.no-touch .nl-form .nl-submit:active {
  background: #69b1a9;
}

.no-touch .nl-form .nl-submit:hover:before {
  background: #58a199;
}
.nl-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 9999;
  visibility: hidden;
  transition: visibility 0s 0.3s, opacity 0.3s;
}

.nl-field.nl-field-open ~ .nl-overlay {
  opacity: 1;
  visibility: visible;
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  transition-delay: 0s;
}
@media screen and (max-width: 45em) {
  .nl-form {
    font-size: 2.4em;
  }
}

@media screen and (max-width: 25em) {
  .nl-form {
    font-size: 1em;
  }
}
</style>
