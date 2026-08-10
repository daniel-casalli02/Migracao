import Header from "../components/Header/Header";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Header 
                    title="Minha Loja" 
                    subtitle="Os melhores produtos!" 
                    totalProducts={10} 
                />
                
                <main>{children}</main>
            </body>
        </html>
    );
}