# Skill: Ingest Source

## When

Invoke when Aswath says "ingest raw/..." or drops a new source in the raw folder.

## How

1. **Read the source**
   - Identify type (article, book, note, image)
   - Understand key claims and structure

2. **Analyze connections**
   - What existing wiki pages does this relate to?
   - What concepts does it introduce?
   - What's new here?

3. **Create wiki pages**
   - Source summary: `wiki/sources/[descriptive-name].md`
   - Concept pages for new topics
   - Update existing pages with cross-links

4. **Frontmatter**
   ```yaml
   ---
   created: YYYY-MM-DD
   tags: [tag1, tag2]
   sources: [raw/path/to/file]
   ---
   ```

5. **Cross-links** (minimum 3)
   - Link to related concepts, people, sources
   - Add backlinks to existing pages

6. **Log operation**
   Append to `wiki/log.md`:
   ```
   ## [YYYY-MM-DD] ingest | filename
   - Created: wiki/sources/[name].md
   - Updated: [list of pages touched]
   - Tags: [tags]
   ```

7. **Ask about profile**
   If source reveals things about Aswath, ask: "Want me to file this to decisions or profile?"

## Output

State what you created and what connections you made. Ask if he wants to emphasize anything.

---

*Last updated: 2026-05-24*