# Skill: Lint Wiki

## When

Invoke when Aswath says "lint the wiki" or asks for a health check. Run monthly or when wiki feels messy.

## How

1. **Find orphan pages**
   - Pages with no incoming links from other wiki pages
   - These may be isolated or need better categorization

2. **Find contradictions**
   - Pages that assert conflicting claims
   - Check: conceptual pages vs source summaries
   - Flag sources that reference deprecated info

3. **Find missing concept pages**
   - Terms mentioned across multiple pages but lacking their own page
   - Topics referenced but not detailed

4. **Find stale data**
   - Claims not backed by recent sources
   - Decisions without outcomes (still pending too long)
   - Goals not updated in a while

5. **Check decisions needing follow-up**
   - Find `outcome: pending` entries older than 30 days
   - Ask Aswath for outcome updates

6. **Report findings**
   Format:
   ```
   ## Wiki Health Report — YYYY-MM-DD

   ### Orphan Pages
   - [list]

   ### Contradictions
   - [list with references]

   ### Missing Concepts
   - [list]

   ### Stale Data
   - [list]

   ### Decisions Needing Follow-up
   - [list — decisions over 30 days with pending outcome]

   ### Recommended Actions
   1. [priority 1]
   2. [priority 2]
   3. [priority 3]
   ```

7. **Fix what you can**
   - Add missing cross-links
   - Update stale frontmatter
   - Archive true orphans

8. **Log to wiki/log.md**
   ```
   ## [YYYY-MM-DD] lint | N issues found, N fixed
   ```

---

*Last updated: 2026-05-24*