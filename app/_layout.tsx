import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons'; // 👈 Importa os ícones

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="cadastro" 
        options={{
          title: 'Cadastro',
          drawerLabel: 'Cadastro',
          drawerIcon: ({ color, size }) => ( 
            <Ionicons name="person-add-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="user" 
        options={{
          title: 'User',
          drawerLabel: 'User',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}