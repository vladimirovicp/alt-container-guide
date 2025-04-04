import{_ as a,c as i,o as e,ae as l}from"./chunks/framework.Dh1jimFm.js";const n="/images/podman_upr3.png",y=JSON.parse('{"title":"Упражнение 3: Создание Dockerfile для Python-скрипта \\"Hello, World!\\"","description":"","frontmatter":{},"headers":[],"relativePath":"topics/topic-3.md","filePath":"topics/topic-3.md"}'),t={name:"topics/topic-3.md"};function p(o,s,h,d,c,k){return e(),i("div",null,s[0]||(s[0]=[l('<h1 id="упражнение-3-создание-dockerfile-для-python-скрипта-hello-world" tabindex="-1">Упражнение 3: Создание Dockerfile для Python-скрипта &quot;Hello, World!&quot; <a class="header-anchor" href="#упражнение-3-создание-dockerfile-для-python-скрипта-hello-world" aria-label="Permalink to &quot;Упражнение 3: Создание Dockerfile для Python-скрипта &quot;Hello, World!&quot;&quot;">​</a></h1><p><img src="'+n+`" alt="Иллюстрация: Мария Фоканова"><em>Иллюстрация: Мария Фоканова</em></p><p>Dockerfile – это сценарий сборки образа. В сценарии описываются шаги того, как из базового образа получить новый образ с выбранным приложением. Базовый образ обычно содержит ОС и среду (например, Python). Инструкции Dockerfile выполняются по порядку, формируя слои образа.</p><p>Минимальный Dockerfile для Python-приложения может включать инструкции:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FROM – указывает базовый образ (например, Python 3).</span></span>
<span class="line"><span>COPY или ADD – копирует файлы приложения в образ.</span></span>
<span class="line"><span>RUN – выполняет команды в процессе сборки (например, установку зависимостей).</span></span>
<span class="line"><span>CMD или ENTRYPOINT – определяет команду, которая запустится при старте контейнера из образа.</span></span></code></pre></div><p>Мы создадим образ, который при запуске будет выполнять простой скрипт &quot;Hello, World!&quot;. В результате получим собственный код в образе для контейнера.</p><hr><h2 id="подготовка-проекта" tabindex="-1">Подготовка проекта <a class="header-anchor" href="#подготовка-проекта" aria-label="Permalink to &quot;Подготовка проекта&quot;">​</a></h2><p>Создадим новый пустой каталог для проекта, например ~/alt-podman-python-hello. Перейдем в него и создадим файл hello.py со следующим содержимым:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;Hello, World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Это простейший Python-скрипт, печатающий приветствие.</p><h2 id="минимальныи-dockerfile" tabindex="-1">Минимальный Dockerfile <a class="header-anchor" href="#минимальныи-dockerfile" aria-label="Permalink to &quot;Минимальный Dockerfile&quot;">​</a></h2><p>В том же каталоге создадим файл Dockerfile (без расширения). Заглавный регистр в названии файла имеет значение. Заполним этот файл.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Используем базовый образ с Python 3 на ветке sisyphus (слой с интерпретатором Python).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry.altlinux.org/alt/python:sisyphus</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Устанавливаем рабочий каталог в контейнере</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WORKDIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Копируем наш скрипт в образ</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">COPY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /app/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Определяем команду по умолчанию: запуск Python-скрипта</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CMD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;python3/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/&quot;hello.py/&quot;]</span></span></code></pre></div><p>Разберём содержимое:</p><ul><li><code>FROM</code> указывает базовый образ – здесь взят облегченый <code>Python 3.12.8</code>. Он содержит сам Python, поэтому нам не нужно устанавливать интерпретатор вручную.</li><li><code>WORKDIR</code> создаёт (если нет) и устанавливает рабочий каталог <code>/app</code>. Дальнейшие команды <code>COPY</code>, <code>CMD</code> интерпретируются относительно этого каталога.</li><li><code>COPY</code> копирует файл <code>hello.py</code> внутрь образа, в каталог <code>/app</code>.</li><li><code>CMD</code> задаёт команду, которая выполнится при запуске контейнера из этого образа. Здесь мы запускаем Python с нашим скриптом.</li></ul><h2 id="сборка-образа" tabindex="-1">Сборка образа <a class="header-anchor" href="#сборка-образа" aria-label="Permalink to &quot;Сборка образа&quot;">​</a></h2><p>Убедимся, что в каталоге находятся Dockerfile и hello.py. Выполним команду сборки:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">podman</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello-python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><ul><li>Ключ <code>-t hello-python</code> задаёт имя (тег) для нового образа</li><li>Точка<code> .</code> указывает путь к Dockerfile (текущий каталог).</li></ul><p>Podman последовательно выполнит шаги: возьмёт образ <code>python:latest</code>, скопирует файл, задаст команду. По окончании мы должны увидеть сообщение о успешной сборке и строку с <code>Successfully tagged hello-python:latest</code> (или подобную).</p><p>Список локальных образов можно проверить командой <code>podman images</code>. Видим новый образ <code>hello-python:latest</code> в списке.</p><h2 id="запуск-контеинера-из-созданного-образа" tabindex="-1">Запуск контейнера из созданного образа <a class="header-anchor" href="#запуск-контеинера-из-созданного-образа" aria-label="Permalink to &quot;Запуск контейнера из созданного образа&quot;">​</a></h2><p>Теперь протестируем наш образ: <code>podman run --rm hello-python</code></p><p>Флаг <code>--rm</code> можно использовать для удаления контейнера после завершения. Контейнер запустится и должен мгновенно завершиться, выведя в консоль <code>Hello, World!</code>. Так как мы указали CMD, нам не нужно вручную писать команду запуска — она взята из образа.</p><h2 id="отладка-если-что-то-пошло-не-так" tabindex="-1">Отладка, если что-то пошло не так <a class="header-anchor" href="#отладка-если-что-то-пошло-не-так" aria-label="Permalink to &quot;Отладка, если что-то пошло не так&quot;">​</a></h2><p>Если контейнер не запускается, проверим: правильно ли назван файл (<code>Dockerfile</code>, а не dockerfile.txt, например), верно ли написаны инструкции. Можно просмотреть логи сборки (<code>podman build</code> выводит пошагово действия) или запустить контейнер в интерактиве: <code>podman run -it --entrypoint bash hello-python</code> – это даст оболочку внутри контейнера, где можно убедиться, что файл <code>hello.py</code> на месте и Python запускается.</p><h2 id="задание-для-самостоятельнои-работы" tabindex="-1">Задание для самостоятельной работы <a class="header-anchor" href="#задание-для-самостоятельнои-работы" aria-label="Permalink to &quot;Задание для самостоятельной работы&quot;">​</a></h2><ol><li>Модифицируем созданный образ или создадим новый для практики:</li></ol><p>Изменим скрипт <code>hello.py</code>, чтобы он, кроме <code>&quot;Hello, World!&quot;</code>, выводил, например, текущее время или имя пользователя. Для получения текущего времени можно использовать модуль datetime.</p><p>Файл <code>hello-date.py</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> datetime</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> datetime</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Вывод сообщения</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;Привет, мир!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Вывод текущей даты и времени</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> datetime.now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;Текущая дата и время:&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> now.strftime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><p>Построим новый образ (например, с тегом <code>hello-python:v2</code>) и запустим его, убедившись, что он выводит обновленное сообщение.</p><ol start="2"><li>Попробуем использовать в Dockerfile другой базовый образ. Например, заменим <code>registry.altlinux.org/alt/python:sisyphus</code> на <code>registry.altlinux.org/alt/alt:p10</code> (минимальный образ ALT Linux) и добавим команду установки Python:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FROM registry.altlinux.org/alt/alt:p10</span></span>
<span class="line"><span>RUN apt-get update &amp;&amp; apt-get install -y python3</span></span></code></pre></div><p>Остальные шаги аналогичны копированию скрипта и запуску. Соберем образ и проверим работоспособность. Обратим внимание на разницу объема в образах podman images, поскольку мы ставим Python поверх базовой системы ALT.</p><h2 id="ожидаемыи-итог" tabindex="-1">Ожидаемый итог: <a class="header-anchor" href="#ожидаемыи-итог" aria-label="Permalink to &quot;Ожидаемый итог:&quot;">​</a></h2><ul><li>мы создали свой первый Dockerfile и на его основе – образ контейнера с Python-скриптом;</li><li>запустили контейнер hello-python и получили вывод <code>“Hello, World!”</code> из изолированного окружения;</li><li>cамостоятельный образ с модифицированным скриптом успешно выводит дополнительную информацию;</li><li>эксперимент с альтернативным базовым образом ALT Linux также должен пройти успешно: контейнер на <code>ALT:p10</code> выводит то же сообщение</li></ul>`,38)]))}const g=a(t,[["render",p]]);export{y as __pageData,g as default};
