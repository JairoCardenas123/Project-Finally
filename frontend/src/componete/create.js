import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    indicador: '',
    descripcion: '',
    categoria: '',
    fecha_inicio: '',
    fecha_terminacion: '',
    formula: '',
    frecuencia: '',
    cumplimiento: 0,
    area: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postData = async () => {
    try {
      const response = await axios.post('http://localhost:7777/api/Indicadores', formData);
      console.log(response.data);
      navigate('/pagina'); // Redirige a la página deseada después de la creación exitosa
    } catch (error) {
      console.error('Error al crear el elemento:', error);
      setError('Error al crear el elemento. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Indicador</label>
          <input name="indicador" placeholder="Nombre" value={formData.indicador} onChange={handleInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Descripción</label>
          <input name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Categoría</label>
          <input name="categoria" placeholder="Categoría" value={formData.categoria} onChange={handleInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Fecha de Inicio</label>
          <input name="fecha_inicio" type="date" value={formData.fecha_inicio} onChange={handleInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Fecha de Terminación</label>
          <input name="fecha_terminacion" type="date" value={formData.fecha_terminacion} onChange={handleInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Formula</label>
          <input name="formula" placeholder="Formula" value={formData.formula} onChange={handleInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Frecuencia</label>
          <input name="frecuencia" placeholder="Frecuencia" value={formData.frecuencia} onChange={handleInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Cumplimiento</label>
          <input name="cumplimiento" type="number" placeholder="Cumplimiento" value={formData.cumplimiento} onChange={handleInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Área</label>
          <input name="area" placeholder="Área" value={formData.area} onChange={handleInputChange} />
        </Form.Field>
        <Button type="submit" onClick={postData}>Crear</Button>
      </Form>
      {error && <p>{error}</p>}
    </div>
  );
}
