import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/theme-toggle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Titlebar from "./components/titlebar";
import MainPage from "./pages/main";
import "./styles/globals.css";
import "./styles/global.scss";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="odin-theme">
      <Titlebar />
      <div className="relative mt-[25px]">
        <div className="absolute right-10 top-10 z-50">
          <ModeToggle />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
