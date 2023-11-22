"use client";

import { useContext } from "react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import "./styles.css";

import { AuthContext } from "@/context";

export default function Login() {
  const context = useContext(AuthContext);
  console.log(context.userData);
  const signUpButtonRef = useRef<HTMLButtonElement | null>(null);
  const signInButtonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const emailSignInRef = useRef<HTMLInputElement>(null);
  const passwordSignInRef = useRef<HTMLInputElement>(null);

  const nameSignUpRef = useRef<HTMLInputElement>(null);
  const emailSignUpRef = useRef<HTMLInputElement>(null);
  const passwordSignUpRef = useRef<HTMLInputElement>(null);
  const celularSignUpRef = useRef<HTMLInputElement>(null);
  const ciudadSignUpRef = useRef<HTMLInputElement>(null);
  const departamentoSignUpRef = useRef<HTMLInputElement>(null);
  const fechaNacimientoSignUpRef = useRef<HTMLInputElement>(null);

  const confirmationCodeRef = useRef<HTMLInputElement>(null);
  const [registrationEmail, setRegistrationEmail] = useState("");

  const handleSignUpClick = () => {
    containerRef?.current?.classList.add("right-panel-active");
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    containerRef?.current?.classList.remove("right-panel-active");
    setIsSignUp(false);
  };

  const handleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const email = emailSignInRef.current?.value || "";
    const password = passwordSignInRef.current?.value || "";

    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://9o6udz5tvk.execute-api.us-east-1.amazonaws.com/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log("logged in successfully");
        context.userData.email = email;
        context.userData.logged = true;
        router.push("/home");
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error("There was an error logging in:", error);
    }
  };

  const handleRegistration = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const name = nameSignUpRef.current?.value || "";
    const email = emailSignUpRef.current?.value || "";
    const password = passwordSignUpRef.current?.value || "";
    const celular = celularSignUpRef.current?.value || "";
    const ciudad = ciudadSignUpRef.current?.value || "";
    const departamento = departamentoSignUpRef.current?.value || "";
    const fechaNacimiento = fechaNacimientoSignUpRef.current?.value || "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Por favor, ingresa un correo electrónico válido.");
      return;
    } else {
      setEmailError("");
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "La contraseña debe contener al menos una mayúscula, un carácter especial y tener una longitud mínima de 6 caracteres."
      );
      return;
    } else {
      setPasswordError("");
    }

    const payload = {
      nombre: name,
      email: email,
      password: password,
      celular: celular,
      ciudad: ciudad,
      departamento: departamento,
      fecha_nacimiento: fechaNacimiento,
    };

    setRegistrationEmail(email);
    console.log("Registration payload:", payload);

    try {
      const response = await fetch(
        "https://9o6udz5tvk.execute-api.us-east-1.amazonaws.com/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setShowConfirmation(true);
      } else {
        console.log(data);
        console.error(data);
      }
    } catch (error) {
      console.error("There was an error registering:", error);
    }
  };

  const handleConfirmation = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const email = registrationEmail;
    const confirmationCode = confirmationCodeRef.current?.value || "";

    const payload = {
      email: email,
      confirmationCode: confirmationCode,
    };

    console.log("Confirmation payload:", payload);

    try {
      const response = await fetch(
        " https://9o6udz5tvk.execute-api.us-east-1.amazonaws.com/confirm-sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setShowConfirmation(false);
        console.log(data);
        console.log("confirmed");
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error("There was an error confirming:", error);
    }
  };

  return (
    <div className="test">
      <div
        className={`container ${isSignUp ? "right-panel-active" : ""}`}
        ref={containerRef}
      >
        <div className="form-container sign-up-container">
          {showConfirmation ? (
            <form action="#">
              <h1>Confirmar Registro</h1>
              <input
                type="text"
                placeholder="Código de Confirmación"
                ref={confirmationCodeRef}
              />
              <button onClick={(event) => handleConfirmation(event)}>
                Confirmar
              </button>
            </form>
          ) : (
            <form>
              <h2>Crear Cuenta</h2>

              <input type="text" placeholder="Nombre" ref={nameSignUpRef} />
              <input
                type="text"
                placeholder="Correo electrónico"
                ref={emailSignUpRef}
              />
              {emailError && <p className="error-message">{emailError}</p>}
              <input type="text" placeholder="Celular" ref={celularSignUpRef} />
              <input type="text" placeholder="Ciudad" ref={ciudadSignUpRef} />
              <input
                type="text"
                placeholder="Departamento"
                ref={departamentoSignUpRef}
              />
              <input
                type="text"
                placeholder="Fecha de Nacimiento"
                ref={fechaNacimientoSignUpRef}
              />

              <input
                type="password"
                placeholder="Contraseña"
                ref={passwordSignUpRef}
              />
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
              <button onClick={(event) => handleRegistration(event)}>
                Registrarse
              </button>
            </form>
          )}
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h2>Iniciar Sesión</h2>

            <input
              type="text"
              placeholder="Correo electrónico"
              ref={emailSignInRef}
            />
            <input
              type="password"
              placeholder="Contraseña"
              ref={passwordSignInRef}
            />

            <a href="#">¿Olvidaste tu contraseña?</a>
            <button onClick={(event) => handleSignIn(event)}>
              Iniciar Sesión
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div
              className={`overlay-panel overlay-left ${
                isSignUp ? "" : "right-panel-active"
              }`}
            >
              <h2>¡Bienvenido de nuevo!</h2>
              <p>
                Para estar conectado con nosotros, inicia sesión con tu
                información personal
              </p>
              <button
                className="ghost"
                ref={signInButtonRef}
                onClick={handleSignInClick}
              >
                Iniciar Sesión
              </button>
            </div>
            <div
              className={`overlay-panel overlay-right ${
                isSignUp ? "right-panel-active" : ""
              }`}
            >
              <h2>¡Hola, Amigo!</h2>
              <p>
                Ingresa tus detalles personales y comienza tu viaje con nosotros
              </p>
              <button
                className="ghost"
                ref={signUpButtonRef}
                onClick={handleSignUpClick}
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
