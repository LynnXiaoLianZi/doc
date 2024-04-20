@ECHO OFF

REM Command file for PDF generation

REM Run Cleanup
call:cleanup

REM Kill pdf reader 
start "" /wait /b taskkill /fi "Windowtitle eq %1*.pdf" /im Foxit*

REM Process files
for %%f in (*.tex) do (
   xelatex %%~nf
   bibtex %%~nf
   xelatex %%~nf
   xelatex %%~nf
   makeindex -s python.ist %%~nf.idx
   xelatex %%~nf
   xelatex %%~nf
   start "" %%~nf.pdf
   if errorlevel 1 exit /b 1
)

echo.
echo.Build finished; the Latex and PDF files are in %BUILDDIR%/latex.
goto end

:cleanup
del *.idx
del *.ilg
del *.ind
del *.toc
del *.aux
del *.bbl
del *.blg
del *.brf
del *.out

:end