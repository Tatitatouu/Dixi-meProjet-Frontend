//Importation des utilitaires de Redux Toolkit et des actions asynchrones 
import { createSlice } from "@reduxjs/toolkit";
import { getProfile, updateProfile } from "../actions/user.action";

//Définition de l'état initial du slice utilisateur 
const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  userName: null,
};

//Création du slice REDUX pour la gestion de l'état utilisateur 
export const user = createSlice({
  name: "user",
  initialState,

  //Reduceurs synchrones (actions simples)
  reducers: {
    setUsername: (state, action) =>({
      ...state,
      username: action.payload.username,
    }),
  },

  //Reduceurs asynchrones 
  extraReducers: (builder) => {
    // Gestion de de l'action de récupération de profil
    builder.addCase(getProfile.pending, (state, action) => initialState); // Lorsque la requête est en cours 
    builder.addCase(getProfile.fulfilled, (state, action) => action.payload); // Lorsque la requête est réussie 
    builder.addCase(getProfile.rejected, (state, action) => { // En cas d'erreur lors de la récupération du profil
      console.error("Erreur lors de la récupération du profil de l'utilisateur.")
    });
    // "" Pour updateProfile
    builder.addCase(updateProfile.pending, (state, action) => initialState); //""
    builder.addCase(updateProfile.fulfilled, (state, action) => action.payload); //""
    builder.addCase(updateProfile.rejected, (state, action) => { //""
      console.error("Erreur lors de la modification du profil de l'utilisateur.")
    });
  }
});

export const { setUsername } = user.actions;
export default user.reducer;