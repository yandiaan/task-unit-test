"use client";
import React, { useState } from "react";
import { addUser } from "@/app/_services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslations } from "@/app/_hooks/langHooks";
import Input from "@/app/_components/input";
import Button from "@/app/_components/button";
import useThemeStore from "@/app/_store/theme-store";

const FormUser = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const { theme } = useThemeStore();
  const { formUser } = useTranslations();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: name,
        email: email,
        gender: gender,
        status: "active",
      };

      const user = await addUser(payload);
      toast.success("Sukses Menambah User");
    } catch (error) {
      toast.error("Gagal Menambahkan Data");
      setName("");
      setEmail("");
      setGender("");
    }
  };

  return (
    <div className="pt-28 px-24 pb-8 bg-orange-600 dark:bg-cyan-950">
      <h2 className="text-2xl text-center font-semibold mb-6 text-white">
        {formUser.title}
      </h2>
      <form onSubmit={handleSubmit}>
        <Input
          label={formUser.form.label.name}
          type="text"
          id="name"
          name="name"
          placeholder={formUser.form.placeholder.name}
          value={name}
          onChange={handleNameChange}
          required
        />

        <Input
          label={formUser.form.label.email}
          type="email"
          id="email"
          name="email"
          placeholder={formUser.form.placeholder.email}
          value={email}
          onChange={handleEmailChange}
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-2">
            {formUser.form.label.gender}
          </label>
          <div className="flex text-white">
            <label className="inline-flex items-center mr-4">
              <input
                data-testid="radio-male"
                type="radio"
                name="gender"
                value="male"
                className="form-radio"
                onChange={handleGenderChange}
              />
              <span className="ml-2">
                {formUser.form.placeholder.gender[0]}
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                data-testid="radio-female"
                type="radio"
                name="gender"
                value="female"
                className="form-radio"
                onChange={handleGenderChange}
              />
              <span className="ml-2">
                {formUser.form.placeholder.gender[1]}
              </span>
            </label>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Button
            color={theme}
            className="text-sm hover:bg-orange-800 dark:hover:bg-cyan-700"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormUser;
