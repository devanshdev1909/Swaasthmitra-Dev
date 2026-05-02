import React, { createContext, useContext, useState } from "react";

const initialState = {
  currentStep: "welcome",
  currentQuestionIndex: 0,
  patientData: {
    demographics: {},
    symptoms: {},
    history: {},
    answers: {},
  },
  conversationHistory: [],
  isInProgress: false,
  dynamicQuestionCount: 0,
};

const ConsultationContext = createContext(undefined);

export const ConsultationProvider = ({ children }) => {
  const [consultation, setConsultation] = useState(initialState);

  const updateConsultation = (updates) => {
    setConsultation((prev) => ({ ...prev, ...updates }));
  };

  const addMessage = (message) => {
    setConsultation((prev) => ({
      ...prev,
      conversationHistory: [...prev.conversationHistory, message],
    }));
  };

  const updatePatientData = (data) => {
    setConsultation((prev) => ({
      ...prev,
      patientData: { ...prev.patientData, ...data },
    }));
  };

  const resetConsultation = () => {
    setConsultation(initialState);
  };

  return (
    <ConsultationContext.Provider
      value={{
        consultation,
        updateConsultation,
        addMessage,
        updatePatientData,
        resetConsultation,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return context;
};
