import { Drawer } from 'expo-router/drawer';
 
export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="cadastro" 
        options={{
          title: 'cadastro',
        }}
      />
      <Drawer.Screen
        name="user" 
        options={{
          title: 'user',
        }}
      />
    </Drawer>
  );
}