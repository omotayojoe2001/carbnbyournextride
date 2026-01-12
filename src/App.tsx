import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CarDetail from "./pages/CarDetail";
import FoodMenu from "./pages/FoodMenu";
import Experiences from "./pages/Experiences";
import BecomeHost from "./pages/BecomeHost";
import Booking from "./pages/Booking";
import SearchResults from "./pages/SearchResults";
import Profile from "./pages/Profile";
import PersonalInfo from "./pages/PersonalInfo";
import Security from "./pages/Security";
import Payments from "./pages/Payments";
import Notifications from "./pages/Notifications";
import Wishlist from "./pages/Wishlist";
import Trips from "./pages/Trips";
import Help from "./pages/Help";
import GiftCards from "./pages/GiftCards";
import NotFound from "./pages/NotFound";
import ReferHost from "./pages/ReferHost";
import FindCohost from "./pages/FindCohost";
import Vehicles from "./pages/profile/Vehicles";
import Reservations from "./pages/profile/Reservations";
import Earnings from "./pages/profile/Earnings";
import Support from "./pages/profile/Support";
import GetStarted from "./pages/GetStarted";
import LearnMore from "./pages/LearnMore";
// Help articles
import HowToBook from "./pages/help/HowToBook";
import CancellationPolicy from "./pages/help/CancellationPolicy";
import ModifyReservation from "./pages/help/ModifyReservation";
import PaymentMethods from "./pages/help/PaymentMethods";
import ContactDriver from "./pages/help/ContactDriver";
import NoStopPolicy from "./pages/help/NoStopPolicy";
import FoodOrdering from "./pages/help/FoodOrdering";
import SafetyGuidelines from "./pages/help/SafetyGuidelines";
import ListYourCar from "./pages/help/ListYourCar";
import HostRequirements from "./pages/help/HostRequirements";
import EarningsPayouts from "./pages/help/EarningsPayouts";
import DriverManagement from "./pages/help/DriverManagement";
import ManageProfile from "./pages/help/ManageProfile";
import Verification from "./pages/help/Verification";
import Privacy from "./pages/help/Privacy";
import DeleteAccount from "./pages/help/DeleteAccount";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/food" element={<FoodMenu />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/become-host" element={<BecomeHost />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/personal-info" element={<PersonalInfo />} />
          <Route path="/profile/security" element={<Security />} />
          <Route path="/profile/payments" element={<Payments />} />
          <Route path="/profile/notifications" element={<Notifications />} />
          <Route path="/profile/wishlist" element={<Wishlist />} />
          <Route path="/profile/trips" element={<Trips />} />
          <Route path="/profile/gift-cards" element={<GiftCards />} />
          <Route path="/profile/vehicles" element={<Vehicles />} />
          <Route path="/profile/reservations" element={<Reservations />} />
          <Route path="/profile/earnings" element={<Earnings />} />
          <Route path="/profile/support" element={<Support />} />
          <Route path="/help" element={<Help />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/refer" element={<ReferHost />} />
          <Route path="/cohost" element={<FindCohost />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/learn-more" element={<LearnMore />} />
          {/* Help articles */}
          <Route path="/help/booking" element={<HowToBook />} />
          <Route path="/help/cancellation" element={<CancellationPolicy />} />
          <Route path="/help/modify-reservation" element={<ModifyReservation />} />
          <Route path="/help/payments" element={<PaymentMethods />} />
          <Route path="/help/contact-driver" element={<ContactDriver />} />
          <Route path="/help/no-stop-policy" element={<NoStopPolicy />} />
          <Route path="/help/food-ordering" element={<FoodOrdering />} />
          <Route path="/help/safety" element={<SafetyGuidelines />} />
          <Route path="/help/list-car" element={<ListYourCar />} />
          <Route path="/help/host-requirements" element={<HostRequirements />} />
          <Route path="/help/earnings" element={<EarningsPayouts />} />
          <Route path="/help/driver-management" element={<DriverManagement />} />
          <Route path="/help/profile" element={<ManageProfile />} />
          <Route path="/help/verification" element={<Verification />} />
          <Route path="/help/privacy" element={<Privacy />} />
          <Route path="/help/delete-account" element={<DeleteAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
