import { Drawer } from 'expo-router/drawer';
 
export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="cadastro" // This is the name of the page and must match the url from root
        options={{
          title: 'cadastro',
        }}
      />
      <Drawer.Screen
        name="user" // This is the name of the page and must match the url from root
        options={{
          title: 'user',
        }}
      />
    </Drawer>
  );
}