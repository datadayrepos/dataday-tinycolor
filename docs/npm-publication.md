# Local npm Packaging

Run `npm run pack:release` to clean-build and verify a README-free local archive
under `.npm-package/`. This local action does not publish or bump versions.
A separate output directory is supported with `-- --out /absolute/output/directory`.

The archive preserves existing runtime entries, declarations and required assets,
plus required legal notices. Repository Markdown, agent instructions, docs
folders, source maps and development files are excluded. Only reviewed public
manifest fields and exact file entries are staged; dependency ranges are unchanged.

Source-root publication is blocked. For a separately authorized normal release,
prepare the archive first and then use `npm run pub`; it rechecks the checksum
and current artifact inputs and publishes that exact archive without rebuilding.
Repack after changing source/build/manifest inputs, using the same output location.
The existing shell menu's npm action prepares the archive before calling `pub`.
Where present, `release` retains its existing version step but now packs/verifies
before `pub`; it is a release operation, never a local verification command.

Git commits/pushes, npm publication and deployment remain human-controlled.
Review push-triggered CI separately; local packing does not establish push safety.
