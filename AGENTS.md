<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- WhatsApp/Instagram links are built only through `src/lib/whatsapp.ts` (number + message helpers, covered by `whatsapp.test.ts`) so the contact number changes in one place.
- Site sections live in `src/components/site/` and compose the single `/` page; nav uses in-page anchors because the client asked for a one-page site.
- Studio photos are CDN assets referenced via `.asset.json` pointers in `src/assets/photos/` (`resolveJsonModule` enabled for these imports).
- All enquiry buttons open one shared inquiry dialog via `InquiryProvider`/`useInquiry` (mounted in `/`), so the form and WhatsApp hand-off live in one place.
- Photos are listed once in `src/lib/photos.ts` with a small and large CDN copy and rendered with `srcSet`/`sizes` (via `PhotoFigure`), so phones download the small copy.
- Starting prices come from `src/lib/pricing.ts` (`startingPriceLabel`, covered by `pricing.test.ts`) so the amount and currency change in one place.
