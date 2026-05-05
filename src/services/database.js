import Dexie from "dexie";

class ConsultationDatabase extends Dexie {
  constructor() {
    super("SwaasthmitraDB");
    this.version(1).stores({
      consultations: "++id, createdAt, completedAt",
    });

    this.version(2).stores({
      consultations: "++id, createdAt, completedAt",
      healthRecords: "++id, date, type",
      personalInfo: "++id",
    });

    this.version(3).stores({
      consultations: "++id, createdAt, completedAt",
      healthRecords: "++id, date, type",
      personalInfo: "++id",
      appointments: "++id, date, status, createdAt",
    });
  }
}

export const db = new ConsultationDatabase();

export const saveConsultation = async (consultation) => {
  return await db.consultations.add(consultation);
};

export const getConsultations = async () => {
  return await db.consultations.toArray();
};

export const getConsultationById = async (id) => {
  return await db.consultations.get(id);
};

export const deleteConsultation = async (id) => {
  return await db.consultations.delete(id);
};
