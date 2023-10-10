"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Importa el hook useRouter
import './styles.css';

export default function Login() {
  const signUpButtonRef = useRef<HTMLButtonElement | null>(null);
  const signInButtonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter(); // Inicializa el hook useRouter

  const handleSignUpClick = () => {
    containerRef?.current?.classList.add("right-panel-active");
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    containerRef?.current?.classList.remove("right-panel-active");
    setIsSignUp(false);
  };

  const handleSignIn = () => {
    // Tu lógica de inicio de sesión aquí

    // Después del inicio de sesión exitoso, redirige a la página principal
    
    router.push("/filesUpload");
  };

  const handleRegistration = () => {
    // Tu lógica de registro aquí

    // Después del registro exitoso, redirige a la página principal
    router.push("/filesUpload");
  };

  return (
    <div className={`container ${isSignUp ? "right-panel-active" : ""}`} ref={containerRef}>
      <div className="form-container sign-up-container">
        <form action="filesUpload">
          <h1>Crear Cuenta</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>o usa tu correo electrónico para registrarte</span>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button onClick={handleRegistration}>
            Registrarse
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="filesUpload">
          <h1>Iniciar Sesión</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>o usa tu cuenta</span>
          <input type="text" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button onClick={handleSignIn}>
            Iniciar Sesión
          </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className={`overlay-panel overlay-left ${isSignUp ? "" : "right-panel-active"}`}>
            <h2>¡Bienvenido de nuevo!</h2>
            <p>Para estar conectado con nosotros, inicia sesión con tu información personal</p>
            <button className="ghost" ref={signInButtonRef} onClick={handleSignInClick}>
              Iniciar Sesión
            </button>
          </div>
          <div className={`overlay-panel overlay-right ${isSignUp ? "right-panel-active" : ""}`}>
            <h2>¡Hola, Amigo!</h2>
            <p>Ingresa tus detalles personales y comienza tu viaje con nosotros</p>
            <button className="ghost" ref={signUpButtonRef} onClick={handleSignUpClick}>
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

