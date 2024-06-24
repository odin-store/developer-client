import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/theme-toggle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import "./styles/globals.css";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="container">
      <ThemeProvider defaultTheme="system" storageKey="odin-theme">
        <div className="absolute right-10 top-10 z-50">
          <ModeToggle />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ThemeProvider>
    </div>
  );
}

export default App;
