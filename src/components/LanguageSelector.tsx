import { useState, useRef, useEffect } from "react";
import { Globe, X, Check } from "lucide-react";

const languages = [
  { code: "en-US", label: "English", region: "United States" },
  { code: "en-GB", label: "English", region: "United Kingdom" },
  { code: "en-NG", label: "English", region: "Nigeria" },
  { code: "en-AU", label: "English", region: "Australia" },
  { code: "en-CA", label: "English", region: "Canada" },
  { code: "en-IN", label: "English", region: "India" },
  { code: "en-IE", label: "English", region: "Ireland" },
  { code: "en-NZ", label: "English", region: "New Zealand" },
  { code: "en-SG", label: "English", region: "Singapore" },
  { code: "en-AE", label: "English", region: "United Arab Emirates" },
  { code: "de-DE", label: "Deutsch", region: "Deutschland" },
  { code: "de-AT", label: "Deutsch", region: "Österreich" },
  { code: "de-CH", label: "Deutsch", region: "Schweiz" },
  { code: "fr-FR", label: "Français", region: "France" },
  { code: "fr-CA", label: "Français", region: "Canada" },
  { code: "fr-BE", label: "Français", region: "Belgique" },
  { code: "fr-CH", label: "Français", region: "Suisse" },
  { code: "es-ES", label: "Español", region: "España" },
  { code: "es-MX", label: "Español", region: "México" },
  { code: "es-AR", label: "Español", region: "Argentina" },
  { code: "es-CO", label: "Español", region: "Colombia" },
  { code: "it-IT", label: "Italiano", region: "Italia" },
  { code: "pt-BR", label: "Português", region: "Brasil" },
  { code: "pt-PT", label: "Português", region: "Portugal" },
  { code: "nl-NL", label: "Nederlands", region: "Nederland" },
  { code: "pl-PL", label: "Polski", region: "Polska" },
  { code: "ru-RU", label: "Русский", region: "Россия" },
  { code: "ja-JP", label: "日本語", region: "日本" },
  { code: "zh-CN", label: "中文", region: "中国" },
  { code: "ko-KR", label: "한국어", region: "대한민국" },
  { code: "ar-AE", label: "العربية", region: "العالم" },
  { code: "hi-IN", label: "हिन्दी", region: "भारत" },
];

const currencies = [
  { code: "USD", symbol: "$", name: "United States Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "NGN", symbol: "₦", name: "Nigerian Naira" },
  { code: "CAD", symbol: "$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "$", name: "Australian Dollar" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"language" | "currency">("language");
  const [selectedLanguage, setSelectedLanguage] = useState("en-NG");
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [autoTranslate, setAutoTranslate] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const currentLanguage = languages.find((l) => l.code === selectedLanguage);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2.5 hover:bg-secondary rounded-full smooth-transition"
      >
        <Globe className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div 
            ref={modalRef}
            className="bg-background rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden animate-slide-up"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-secondary rounded-full smooth-transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setActiveTab("language")}
                  className={`text-sm font-semibold pb-2 border-b-2 ${
                    activeTab === "language" ? "border-foreground" : "border-transparent text-muted-foreground"
                  }`}
                >
                  Language and region
                </button>
                <button
                  onClick={() => setActiveTab("currency")}
                  className={`text-sm font-semibold pb-2 border-b-2 ${
                    activeTab === "currency" ? "border-foreground" : "border-transparent text-muted-foreground"
                  }`}
                >
                  Currency
                </button>
              </div>
              <div className="w-9" />
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(80vh-80px)] p-6">
              {activeTab === "language" && (
                <div>
                  {/* Translation Toggle */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Translation</h3>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={autoTranslate}
                        onChange={(e) => setAutoTranslate(e.target.checked)}
                        className="w-5 h-5 rounded border-border"
                      />
                      <span className="text-sm">Automatically translate descriptions and reviews to English.</span>
                    </label>
                  </div>

                  {/* Suggested */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Suggested language and region</h3>
                    <button
                      onClick={() => setSelectedLanguage("en-NG")}
                      className={`p-4 border rounded-xl text-left smooth-transition w-full ${
                        selectedLanguage === "en-NG" ? "border-foreground bg-secondary" : "border-border hover:border-foreground"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">English</p>
                          <p className="text-sm text-muted-foreground">Nigeria</p>
                        </div>
                        {selectedLanguage === "en-NG" && <Check className="w-5 h-5" />}
                      </div>
                    </button>
                  </div>

                  {/* All Languages */}
                  <div>
                    <h3 className="font-semibold mb-3">Choose a language and region</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setSelectedLanguage(lang.code)}
                          className={`p-3 border rounded-xl text-left smooth-transition ${
                            selectedLanguage === lang.code ? "border-foreground bg-secondary" : "border-border hover:border-foreground"
                          }`}
                        >
                          <p className="font-medium text-sm">{lang.label}</p>
                          <p className="text-xs text-muted-foreground">{lang.region}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "currency" && (
                <div>
                  <h3 className="font-semibold mb-3">Choose a currency</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        onClick={() => setSelectedCurrency(currency.code)}
                        className={`p-3 border rounded-xl text-left smooth-transition ${
                          selectedCurrency === currency.code ? "border-foreground bg-secondary" : "border-border hover:border-foreground"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">{currency.name}</p>
                            <p className="text-xs text-muted-foreground">{currency.code} – {currency.symbol}</p>
                          </div>
                          {selectedCurrency === currency.code && <Check className="w-4 h-4" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguageSelector;
