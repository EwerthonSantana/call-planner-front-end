export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string; // Ex: "user" ou "admin"
  active: boolean;
  phone: string; // Ex: "(11) 98765-4321"
  birthDate: string; // Formato ISO: "YYYY-MM-DD"
  nationalId: string;
  address: Address;
  createdAt: string; // Formato ISO: "YYYY-MM-DDTHH:mm:ssZ"
}

export class Address {
  street: string;
  number: string; // Ex: "123" ou "S/N"
  complement: string; // Ex: "Apto 302" ou pode ser vazio
  neighborhood: string;
  city: string;
  state: string; // Ex: "SP"; "RJ"
  zipCode: string; // Ex: "12345-678"
  country: string; // Ex: "Brasil"
}
