
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Test from "./pages/Test";
import Counseling from "./pages/Counseling";
import NotFound from "./pages/NotFound";
import TestMinatBakat from "./pages/articles/TestMinatBakat";
import KonselingKarir from "./pages/articles/KonselingKarir";
import PerencanaanKarir from "./pages/articles/PerencanaanKarir";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/articles/tes-minat-bakat" element={<TestMinatBakat />} />
          <Route path="/articles/konseling-karir" element={<KonselingKarir />} />
          <Route path="/articles/perencanaan-karir" element={<PerencanaanKarir />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
