import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import LogoImg from "../../assets/logo.svg";
import api from "../../services/api";

const NewIncident = () => {
  const history = useHistory();
  const ongId = localStorage.getItem("ongId");
  const [form, setForm] = useState({});

  const handleNewIncident = async e => {
    e.preventDefault();
    try {
      await api.post("incidents", form, {
        headers: { Authorization: ongId }
      });
      history.push("/profile");
    } catch (error) {
      alert(`Não foi possível criar o incidente`);
    }
  };

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
            <Link className="back-link" to="/profile">
              <FiArrowLeft size={16} color="#E02041" />
              Voltar para a home
            </Link>
          </p>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Titulo do caso"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            placeholder="Descrição"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          ></textarea>
          <input
            placeholder="Valor em reais"
            value={form.value}
            onChange={e => setForm({ ...form, value: e.target.value })}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
