document.addEventListener("DOMContentLoaded", () => {
  const btnES = document.getElementById("btn-es");
  const btnEN = document.getElementById("btn-en");

  let lang = localStorage.getItem("lang") || "es";
  setLanguage(lang);

  if (btnES) btnES.addEventListener("click", () => setLanguage("es"));
  if (btnEN) btnEN.addEventListener("click", () => setLanguage("en"));

  function setLanguage(langCode) {
    localStorage.setItem("lang", langCode);
    const isES = langCode === "es";

    // ===== NAVBAR =====
    const navHome = document.getElementById("navHome");
    const navUs = document.getElementById("navUs");
    const navLogin = document.getElementById("navLogin");
    if (navHome) navHome.textContent = isES ? "INICIO" : "HOME";
    if (navUs) navUs.textContent = isES ? "NOSOTROS" : "ABOUT US";
    if (navLogin) navLogin.textContent = isES ? "ACCEDER" : "LOGIN";

    // ===== INICIO =====
    const mainSub = document.getElementById("mainSub");
    const mainDesc = document.getElementById("mainDesc");
    if (mainSub)
      mainSub.textContent = isES
        ? "EL BOT COLOMBIANO MÁS RECIENTE"
        : "THE NEWEST COLOMBIAN BOT";
    if (mainDesc)
      mainDesc.textContent = isES
        ? "Explora el futuro de la inteligencia artificial, la innovación y el software hecho en Colombia."
        : "Explore the future of artificial intelligence, innovation, and software made in Colombia.";

    // ===== NOSOTROS =====
    const aboutTitle = document.getElementById("aboutTitle");
    const aboutSub = document.getElementById("aboutSub");
    const aboutDesc1 = document.getElementById("aboutDesc1");
    const aboutDesc2 = document.getElementById("aboutDesc2");
    const aboutDesc3 = document.getElementById("aboutDesc3");

    if (aboutTitle)
      aboutTitle.textContent = isES ? "Conócenos Más" : "Get to Know Us";
    if (aboutSub)
      aboutSub.textContent = isES
        ? "El lado oscuro del conocimiento… donde crece la innovación"
        : "The dark side of knowledge… where innovation grows";
    if (aboutDesc1)
      aboutDesc1.textContent = isES
        ? "En VOID somos más que un grupo tecnológico: somos un movimiento de mentes valientes que moldean el futuro del software, la IA y la ciberseguridad."
        : "At VOID we are more than a tech group: we are a movement of brave minds shaping the future of software, AI, and cybersecurity.";
    if (aboutDesc2)
      aboutDesc2.textContent = isES
        ? "Nacimos en la Universidad Santo Tomás con la misión de formar y desafiar a la nueva generación de innovadores."
        : "We were born at Santo Tomás University with the mission to train and challenge the new generation of innovators.";
    if (aboutDesc3)
      aboutDesc3.textContent = isES
        ? "Creemos en aprender haciendo: proyectos reales, problemas reales, resultados reales."
        : "We believe in learning by doing: real projects, real problems, real results.";

    // ===== LOGIN =====
    const loginTitle = document.getElementById("loginTitle");
    const emailLabel = document.getElementById("emailLabel");
    const passLabel = document.getElementById("passLabel");
    const loginBtn = document.getElementById("loginBtn");
    const registerQuestion = document.getElementById("registerQuestion");
    const openRegister = document.getElementById("open-register-btn");
    const modalTitle = document.getElementById("modalTitle");
    const regSubmit = document.getElementById("reg-submit");
    const regName = document.getElementById("reg-name");
    const regEmail = document.getElementById("reg-email");
    const regPass = document.getElementById("reg-pass");

    if (loginTitle)
      loginTitle.textContent = isES ? "Bienvenido" : "Welcome";
    if (emailLabel)
      emailLabel.textContent = isES ? "Correo electrónico" : "Email";
    if (passLabel)
      passLabel.textContent = isES ? "Contraseña" : "Password";
    if (loginBtn)
      loginBtn.textContent = isES ? "Acceder" : "Login";
    if (registerQuestion)
      registerQuestion.textContent = isES
        ? "¿No tienes cuenta?"
        : "Don't have an account?";
    if (openRegister)
      openRegister.textContent = isES ? "Regístrate" : "Sign up";

    if (modalTitle)
      modalTitle.textContent = isES ? "Crear cuenta" : "Create account";
    if (regSubmit)
      regSubmit.textContent = isES ? "Crear cuenta" : "Create account";
    if (regName)
      regName.placeholder = isES ? "Nombre completo" : "Full name";
    if (regEmail)
      regEmail.placeholder = isES ? "Correo electrónico" : "Email";
    if (regPass)
      regPass.placeholder = isES ? "Contraseña" : "Password";

    btnES.classList.toggle("active-lang", isES);
    btnEN.classList.toggle("active-lang", !isES);
  }

  // ===== MODAL =====
  const modal = document.getElementById("register-modal");
  const openBtn = document.getElementById("open-register-btn");
  const closeBtn = document.getElementById("close-register");
  if (openBtn) openBtn.addEventListener("click", () => modal.classList.add("show"));
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("show"));

  // ===== LOGIN VALIDATION =====
  const loginBtn = document.getElementById("loginBtn");
  const loginEmail = document.getElementById("login-email");
  const loginPass = document.getElementById("login-pass");

  const loginMsg = document.createElement("p");
  loginMsg.classList.add("register-message");
  if (loginBtn) loginBtn.insertAdjacentElement("afterend", loginMsg);

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const userStored = localStorage.getItem("userEmail");
      const passStored = localStorage.getItem("userPass");
      const lang = localStorage.getItem("lang") || "es";
      const isES = lang === "es";

      const email = loginEmail.value.trim();
      const pass = loginPass.value.trim();

      if (!email || !pass) {
        loginMsg.textContent = isES
          ? "⚠ Por favor, completa todos los campos."
          : "⚠ Please fill in all fields.";
        loginMsg.style.color = "#ff4b4b";
        return;
      }

      // ✅ Cuenta predefinida
      if (email === "IAvoid@gmail.com" && pass === "123456789") {
        loginMsg.style.color = "#38ff7a";
        loginMsg.textContent = isES
          ? "✅ Inicio de sesión exitoso. Redirigiendo..."
          : "✅ Login successful. Redirecting...";
        setTimeout(() => {
          window.location.href = "IA.html";
        }, 1500);
        return;
      }

      // ✅ Cuenta registrada manualmente
      if (email === userStored && pass === passStored) {
        loginMsg.style.color = "#38ff7a";
        loginMsg.textContent = isES
          ? "✅ Inicio de sesión exitoso. Redirigiendo..."
          : "✅ Login successful. Redirecting...";
        setTimeout(() => {
          window.location.href = "IA.html";
        }, 1500);
      } else {
        loginMsg.style.color = "#ff4b4b";
        loginMsg.textContent = isES
          ? "❌ Credenciales incorrectas."
          : "❌ Incorrect credentials.";
      }
    });
  }

  // ===== REGISTER =====
  const regSubmit = document.getElementById("reg-submit");
  const regName = document.getElementById("reg-name");
  const regEmail = document.getElementById("reg-email");
  const regPass = document.getElementById("reg-pass");
  const regMsg = document.getElementById("reg-msg");

  if (regSubmit) {
    regSubmit.addEventListener("click", () => {
      const lang = localStorage.getItem("lang") || "es";
      const isES = lang === "es";

      if (!regName.value || !regEmail.value || !regPass.value) {
        regMsg.style.color = "#ff4b4b";
        regMsg.textContent = isES
          ? "⚠ Por favor, completa todos los campos."
          : "⚠ Please fill in all fields.";
        return;
      }

      localStorage.setItem("userName", regName.value);
      localStorage.setItem("userEmail", regEmail.value);
      localStorage.setItem("userPass", regPass.value);

      regMsg.style.color = "#38ff7a";
      regMsg.textContent = isES
        ? "✅ Cuenta creada correctamente."
        : "✅ Account created successfully.";
      setTimeout(() => {
        modal.classList.remove("show");
      }, 1500);
    });
  }
});