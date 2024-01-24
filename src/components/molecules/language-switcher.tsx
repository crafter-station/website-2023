import { getValidLocale } from "@/i18n/utils"
import SpainFlagIcon from "../atoms/icons/spain-flag-icon"
import USAFlagIcon from "../atoms/icons/usa-flag-icon"
import { cn } from "@/lib/utils"

export const LanguageSwitcher = ({
  currentLocale,
}: {
  currentLocale?: string
}) => {
  const locale = getValidLocale(currentLocale)

  return (
    <ul className="flex space-x-6">
      <li
        className={cn(
          "rounded-full",
          locale === "en"
            ? "outline-2 outline-amber-500 outline-dashed outline-offset-2"
            : "outline-2 outline-transparent",
        )}
      >
        <a href="/en" className="text-sm font-medium">
          <USAFlagIcon />
        </a>
      </li>
      <li
        className={cn(
          "rounded-full",
          locale === "es"
            ? "outline-2 outline-amber-500 outline-dashed outline-offset-2"
            : "outline-4 outline-transparent",
        )}
      >
        <a href="/" className="text-sm font-medium">
          <SpainFlagIcon />
        </a>
      </li>
    </ul>
  )
}
