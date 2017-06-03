" set cursorline
" set cursorcolumn
if has('gui_running')
    colorscheme zuturn
endif
set expandtab
set nocompatible
syntax on
syntax enable
set foldmethod=syntax
set mouse=a
set helplang=cn
set nowrap
set title
set autoread
set autochdir
set number
set ruler
set number
set hlsearch
set incsearch
set guifont=Monaco:h16
set tabstop=4
set softtabstop=4
set shiftwidth=4
set shiftround
set autoindent
set smartindent
set encoding=utf8
set termencoding=utf-8
set fileencodings=utf-8
set fencs=utf-8
set nobackup
set noswapfile
set foldmethod=indent
set cc=80
set laststatus=2

"========JSON FORMAT==========
"map <buffer> <F6> :%!python -m json.tool<CR>
nnoremap <leader>fj  :<C-U>call FormatJSON(v:count)<CR>
nmap <leader>jf :<C-U>call FormatJSON(v:count)<CR>
"========PYTHONCOMPLETE=======
filetype plugin on
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType python map <buffer> <F5> :call Flake8()<CR>
autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
autocmd FileType javascript map <buffer> <F5> :JSHint<CR>
autocmd FileType c set omnifunc=ccomplete#Complete
let g:pydiction_location='/usr/share/vim/vim73/pydiction/complete-dict'
filetype plugin indent on

"map <F5> :cc<CR>
"==========NERDTree===========
let NERDTreeAutoCenter=1
let NERDTreeMouseMode=2
let NERDChristsTree=1
let NERDTreeShowBookmarks=1
let NERDTreeShowFiles=1
let NERDTreeWinPos='left'
let NERDTreeWinSize=20
let NERDTreeQuitOnOpen=1
map <F3> :NERDTreeToggle<CR>

"========taglist=======
let Tlist_Show_One_File=1
let Tlist_WinWidth=30
"let Tlist_Use_Horiz_Window = 1
let Tlist_Use_Right_Window=1
let Tlist_Exit_OnlyWindow=1
let Tlist_Ctags_Cmd='/usr/local/bin/ctags'
map <F2> :TlistToggle<CR>


set nocompatible
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
if has('gui_running')
    Bundle "Valloric/YouCompleteMe"
    nnoremap <leader>gd :YcmCompleter GoToDeclaration<CR>
    nnoremap <leader>gr :YcmCompleter GoToReferences<CR>
    let g:gitgutter_max_signs=100000
endif

Bundle 'rizzatti/dash.vim'
Bundle "vim-scripts/Pydiction"
Bundle "scrooloose/syntastic"
Bundle "jiangmiao/auto-pairs"
Bundle "scrooloose/nerdtree"
Bundle "vim-scripts/taglist.vim"
Bundle "vim-scripts/pylint.vim"
Bundle "airblade/vim-gitgutter"
Bundle "tpope/vim-fugitive"
Bundle "nvie/vim-flake8"
Bundle "Shutnik/jshint2.vim"
Bundle "vim-scripts/vim-json-line-format"
let g:syntastic_ignore_files=[".*\.py$"]
call vundle#end()
filetype plugin indent on
