import * as ImagePicker from "expo-image-picker";

const pickImage = async () => {
   
   let result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.All,
     allowsEditing: true,
     aspect: [4, 3],
     quality: 1,
   });

   if (!result.cancelled) {
     return result.uri;
   }
   return null;
 };


 export { pickImage };