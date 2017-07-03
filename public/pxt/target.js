var pxtTargetBundle = {
  "id": "blapp",
  "name": "Blapp PXT",
  "title": "Blapp PXT Target",
  "corepkg": "core",
  "cloud": {
    "workspace": false,
    "packages": true
  },
  "bundleddirs": [
    "libs/core"
  ],
  "runtime": {
    "mathBlocks": true,
    "loopsBlocks": true,
    "logicBlocks": true,
    "variablesBlocks": true,
    "textBlocks": true,
    "listsBlocks": true
  },
  "simulator": {
    "autoRun": true,
    "functionblocks": true
  },
  "appTheme": {
    "logoUrl": "/pxt/",
    "homeUrl": "/pxt/",
    "embedUrl": "http://sample.pxt.io/",
    "privacyUrl": "https://go.microsoft.com/fwlink/?LinkId=521839",
    "termsOfUseUrl": "https://go.microsoft.com/fwlink/?LinkID=206977",
    "docMenu": [
      {
        "name": "About",
        "path": "/pxt/docs/about.html"
      },
      {
        "name": "Docs",
        "path": "/pxt/docs/docs.html"
      }
    ],
    "coloredToolbox": true,
    "monacoToolbox": true,
    "invertedMenu": true,
    "blocklyOptions": {
      "trashcan": true,
      "grid": {
        "spacing": 45,
        "length": 7,
        "colour": "rgba(189, 195, 199, 0.30)",
        "snap": true
      }
    },
    "TOC": [
      {
        "name": "Blocks",
        "subitems": [
          {
            "name": "On Start",
            "subitems": [],
            "path": "/blocks/on-start",
            "prevName": "Blocks",
            "prevPath": "/blocks",
            "nextName": "Loops",
            "nextPath": "/blocks/loops"
          },
          {
            "name": "Loops",
            "subitems": [
              {
                "name": "repeat",
                "subitems": [],
                "path": "/blocks/loops/repeat",
                "prevName": "Loops",
                "prevPath": "/blocks/loops",
                "nextName": "for",
                "nextPath": "/blocks/loops/for"
              },
              {
                "name": "for",
                "subitems": [],
                "path": "/blocks/loops/for",
                "prevName": "repeat",
                "prevPath": "/blocks/loops/repeat",
                "nextName": "while",
                "nextPath": "/blocks/loops/while"
              },
              {
                "name": "while",
                "subitems": [],
                "path": "/blocks/loops/while",
                "prevName": "for",
                "prevPath": "/blocks/loops/for",
                "nextName": "Logic",
                "nextPath": "/blocks/logic"
              }
            ],
            "path": "/blocks/loops",
            "prevName": "On Start",
            "prevPath": "/blocks/on-start",
            "nextName": "repeat",
            "nextPath": "/blocks/loops/repeat"
          },
          {
            "name": "Logic",
            "subitems": [
              {
                "name": "if",
                "subitems": [],
                "path": "/blocks/logic/if",
                "prevName": "Logic",
                "prevPath": "/blocks/logic",
                "nextName": "Boolean",
                "nextPath": "/blocks/logic/boolean"
              },
              {
                "name": "Boolean",
                "subitems": [],
                "path": "/blocks/logic/boolean",
                "prevName": "if",
                "prevPath": "/blocks/logic/if",
                "nextName": "Variables",
                "nextPath": "/blocks/variables"
              }
            ],
            "path": "/blocks/logic",
            "prevName": "while",
            "prevPath": "/blocks/loops/while",
            "nextName": "if",
            "nextPath": "/blocks/logic/if"
          },
          {
            "name": "Variables",
            "subitems": [
              {
                "name": "assign",
                "subitems": [],
                "path": "/blocks/variables/assign",
                "prevName": "Variables",
                "prevPath": "/blocks/variables",
                "nextName": "change var",
                "nextPath": "/blocks/variables/change"
              },
              {
                "name": "change var",
                "subitems": [],
                "path": "/blocks/variables/change",
                "prevName": "assign",
                "prevPath": "/blocks/variables/assign",
                "nextName": "var",
                "nextPath": "/blocks/variables/var"
              },
              {
                "name": "var",
                "subitems": [],
                "path": "/blocks/variables/var",
                "prevName": "change var",
                "prevPath": "/blocks/variables/change",
                "nextName": "Math",
                "nextPath": "/blocks/math"
              }
            ],
            "path": "/blocks/variables",
            "prevName": "Boolean",
            "prevPath": "/blocks/logic/boolean",
            "nextName": "assign",
            "nextPath": "/blocks/variables/assign"
          },
          {
            "name": "Math",
            "subitems": [],
            "path": "/blocks/math",
            "prevName": "var",
            "prevPath": "/blocks/variables/var",
            "nextName": "JavaScript blocks",
            "nextPath": "/blocks/javascript-blocks"
          },
          {
            "name": "JavaScript blocks",
            "subitems": [],
            "path": "/blocks/javascript-blocks",
            "prevName": "Math",
            "prevPath": "/blocks/math",
            "nextName": "Custom blocks",
            "nextPath": "/blocks/custom"
          },
          {
            "name": "Custom blocks",
            "subitems": [],
            "path": "/blocks/custom",
            "prevName": "JavaScript blocks",
            "prevPath": "/blocks/javascript-blocks",
            "nextName": "JavaScript",
            "nextPath": "/javascript"
          }
        ],
        "path": "/blocks",
        "nextName": "On Start",
        "nextPath": "/blocks/on-start"
      },
      {
        "name": "JavaScript",
        "subitems": [
          {
            "name": "Calling",
            "subitems": [],
            "path": "/javascript/call",
            "prevName": "JavaScript",
            "prevPath": "/javascript",
            "nextName": "Sequencing",
            "nextPath": "/javascript/sequence"
          },
          {
            "name": "Sequencing",
            "subitems": [],
            "path": "/javascript/sequence",
            "prevName": "Calling",
            "prevPath": "/javascript/call",
            "nextName": "Variables",
            "nextPath": "/javascript/variables"
          },
          {
            "name": "Variables",
            "subitems": [],
            "path": "/javascript/variables",
            "prevName": "Sequencing",
            "prevPath": "/javascript/sequence",
            "nextName": "Operators",
            "nextPath": "/javascript/operators"
          },
          {
            "name": "Operators",
            "subitems": [],
            "path": "/javascript/operators",
            "prevName": "Variables",
            "prevPath": "/javascript/variables",
            "nextName": "Statements",
            "nextPath": "/javascript/statements"
          },
          {
            "name": "Statements",
            "subitems": [],
            "path": "/javascript/statements",
            "prevName": "Operators",
            "prevPath": "/javascript/operators",
            "nextName": "Functions",
            "nextPath": "/javascript/functions"
          },
          {
            "name": "Functions",
            "subitems": [],
            "path": "/javascript/functions",
            "prevName": "Statements",
            "prevPath": "/javascript/statements",
            "nextName": "Types",
            "nextPath": "/javascript/types"
          },
          {
            "name": "Types",
            "subitems": [],
            "path": "/javascript/types",
            "prevName": "Functions",
            "prevPath": "/javascript/functions",
            "nextName": "Classes",
            "nextPath": "/javascript/classes"
          },
          {
            "name": "Classes",
            "subitems": [],
            "path": "/javascript/classes",
            "prevName": "Types",
            "prevPath": "/javascript/types",
            "nextName": "Interfaces",
            "nextPath": "/javascript/interfaces"
          },
          {
            "name": "Interfaces",
            "subitems": [],
            "path": "/javascript/interfaces",
            "prevName": "Classes",
            "prevPath": "/javascript/classes",
            "nextName": "Generics",
            "nextPath": "/javascript/generics"
          },
          {
            "name": "Generics",
            "subitems": [],
            "path": "/javascript/generics",
            "prevName": "Interfaces",
            "prevPath": "/javascript/interfaces",
            "nextName": "Types",
            "nextPath": "/types"
          }
        ],
        "path": "/javascript",
        "prevName": "Custom blocks",
        "prevPath": "/blocks/custom",
        "nextName": "Calling",
        "nextPath": "/javascript/call"
      },
      {
        "name": "Types",
        "subitems": [
          {
            "name": "Number",
            "subitems": [],
            "path": "/types/number",
            "prevName": "Types",
            "prevPath": "/types",
            "nextName": "String",
            "nextPath": "/types/string"
          },
          {
            "name": "String",
            "subitems": [],
            "path": "/types/string",
            "prevName": "Number",
            "prevPath": "/types/number",
            "nextName": "Boolean",
            "nextPath": "/types/boolean"
          },
          {
            "name": "Boolean",
            "subitems": [],
            "path": "/types/boolean",
            "prevName": "String",
            "prevPath": "/types/string",
            "nextName": "Support",
            "nextPath": "/support"
          }
        ],
        "path": "/types",
        "prevName": "Generics",
        "prevPath": "/javascript/generics",
        "nextName": "Number",
        "nextPath": "/types/number"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Support",
            "subitems": [],
            "path": "/support",
            "prevName": "Boolean",
            "prevPath": "/types/boolean",
            "nextName": "FAQ",
            "nextPath": "/faq"
          },
          {
            "name": "FAQ",
            "subitems": [],
            "path": "/faq",
            "prevName": "Support",
            "prevPath": "/support",
            "nextName": "Translate",
            "nextPath": "/translate"
          },
          {
            "name": "Translate",
            "subitems": [],
            "path": "/translate",
            "prevName": "FAQ",
            "prevPath": "/faq",
            "nextName": "Sharing projects",
            "nextPath": "/share"
          },
          {
            "name": "Sharing projects",
            "subitems": [],
            "path": "/share",
            "prevName": "Translate",
            "prevPath": "/translate",
            "nextName": "Offline support",
            "nextPath": "/offline"
          },
          {
            "name": "Offline support",
            "subitems": [],
            "path": "/offline",
            "prevName": "Sharing projects",
            "prevPath": "/share",
            "nextName": "Streaming",
            "nextPath": "/streaming"
          },
          {
            "name": "Streaming",
            "subitems": [],
            "path": "/streaming",
            "prevName": "Offline support",
            "prevPath": "/offline",
            "nextName": "Packages",
            "nextPath": "/packages"
          }
        ],
        "prevName": "Boolean",
        "prevPath": "/types/boolean"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Packages",
            "subitems": [
              {
                "name": "Build your own",
                "subitems": [],
                "path": "/packages/build-your-own",
                "prevName": "Packages",
                "prevPath": "/packages",
                "nextName": "Approval",
                "nextPath": "/packages/approval"
              },
              {
                "name": "Approval",
                "subitems": [],
                "path": "/packages/approval",
                "prevName": "Build your own",
                "prevPath": "/packages/build-your-own",
                "nextName": "Versioning",
                "nextPath": "/packages/versioning"
              },
              {
                "name": "Versioning",
                "subitems": [],
                "path": "/packages/versioning",
                "prevName": "Approval",
                "prevPath": "/packages/approval",
                "nextName": "Command Line Interface",
                "nextPath": "/cli"
              }
            ],
            "path": "/packages",
            "prevName": "Streaming",
            "prevPath": "/streaming",
            "nextName": "Build your own",
            "nextPath": "/packages/build-your-own"
          },
          {
            "name": "Command Line Interface",
            "subitems": [],
            "path": "/cli",
            "prevName": "Versioning",
            "prevPath": "/packages/versioning",
            "nextName": "Visual Studio Code support",
            "nextPath": "/code"
          },
          {
            "name": "Visual Studio Code support",
            "subitems": [],
            "path": "/code",
            "prevName": "Command Line Interface",
            "prevPath": "/cli",
            "nextName": "Coding on Raspberry Pi",
            "nextPath": "/raspberry-pi"
          },
          {
            "name": "Coding on Raspberry Pi",
            "subitems": [],
            "path": "/raspberry-pi",
            "prevName": "Visual Studio Code support",
            "prevPath": "/code"
          }
        ],
        "prevName": "Streaming",
        "prevPath": "/streaming"
      }
    ],
    "id": "blapp",
    "title": "Blapp PXT Target",
    "name": "Blapp PXT",
    "htmlDocIncludes": {},
    "locales": {
      "pl": {
        "name": "Przykład PXT",
        "title": "Przykładowe Doświadczenie PXT",
        "docMenu": [
          {
            "name": "O nas",
            "path": "/about"
          },
          {
            "name": "Dokumentacja",
            "path": "/docs"
          }
        ]
      }
    }
  },
  "blocksprj": {
    "id": "blocksprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.blocks",
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n</xml>",
      "main.ts": " ",
      "README.md": " "
    }
  },
  "tsprj": {
    "id": "tsprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "main.ts": " ",
      "README.md": " "
    }
  },
  "bundledpkgs": {
    "core": {
      "README.md": "# basic\n\nAdd your docs here...",
      "data.ts": "/**\n * Basic functionalities.\n */\n//% color=#00BCD4 weight=80\nnamespace Data {\n    /**\n     * get the current value of a shared variable\n     */\n    //% weight=50\n    //% blockId=get_shared_string\n    //% block=\"shared string %name\"\n    export function getSharedString(name: string): string {\n        return getSharedStringImpl(name);\n    }\n\n    /**\n     * get the current value of a shared variable\n     */\n    //% weight=50\n    //% blockId=get_shared_number\n    //% block=\"shared number %name\"\n    export function getSharedNumber(name: string): number {\n        return getSharedNumberImpl(name);\n    }\n\n    /**\n     * get the current value of a shared variable\n     */\n    //% weight=50\n    //% blockId=get_shared_boolean\n    //% block=\"shared true/false value %name\"\n    export function getSharedBoolean(name: string): boolean {\n        return getSharedBooleanImpl(name);\n    }\n\n    /**\n     * get the current value of a shared variable\n     */\n    //% weight=50\n    //% blockId=get_shared_list\n    //% block=\"shared list %name\"\n    export function getSharedList(name: string): string[] {\n        return getSharedListImpl(name);\n    }\n\n    /**\n     * set the current value of a shared variable\n     */\n    //% weight=50\n    //% blockId=set_shared_string\n    //% block=\"set shared string %name|to %v\"\n    export function setSharedString(name: string, v: string): void {\n        return setSharedStringImpl(name, v);\n    }\n\n    /**\n     * get the current value of a shared variable\n     */\n    //% weight=50\n    //% blockId=set_shared_number\n    //% block=\"set shared number %name|to %v\"\n    export function setSharedNumber(name: string, v: number): void {\n        return setSharedNumberImpl(name, v);\n    }\n\n    /**\n     * get the current value of a shared variable\n     */\n    //% weight=50\n    //% blockId=set_shared_boolean\n    //% block=\"set shared true/false value %name|to %v\"\n    export function setSharedBoolean(name: string, v: boolean): void {\n        return setSharedBooleanImpl(name, v);\n    }\n\n    /**\n     * get the current value of a shared variable\n     */\n    //% weight=50\n    //% blockId=set_shared_list\n    //% block=\"set shared list %name|to %v\"\n    export function setSharedList(name: string, v: string[]): void {\n        return setSharedListImpl(name, v);\n    }\n\n    /**\n     * when the UI is updated, execute some code\n    **/\n    //% weight=30\n    //% blockId=on_shared_change\n    //% block=\"When shared %name|changes\"\n    export function onSharedVariableChange(name: string, body: Action):void {\n        onSharedVariableChangeImpl(name, body);\n    }\n\n}",
      "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"arrays\"\n    length: number;\n\n    /**\n      * Appends new elements to an array.\n      * @param items New elements of the Array.\n      */\n    //% help=arrays/push\n    //% shim=Array_::push weight=49\n    //% blockId=\"array_push\" block=\"%list| add value %value| to end\" blockNamespace=\"arrays\"\n    push(item: T): void;\n\n    /**\n      * Removes the last element from an array and returns it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=48\n    //% blockId=\"array_pop\" block=\"get and remove last value from %list\" blockNamespace=\"arrays\"\n    pop(): T;\n\n    /**\n      * Reverses the elements in an Array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% help=arrays/reverse\n    //% helper=arrayReverse weight=10 advanced=true\n    //% blockId=\"array_reverse\" block=\"reverse %list\" blockNamespace=\"arrays\"\n    reverse(): void;\n\n    /**\n      * Removes the first element from an array and returns that element. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=70 advanced=true\n    //% blockId=\"array_shift\" block=\"get and remove first value from %list\" blockNamespace=\"arrays\"\n    shift(): T;\n\n    /**\n      * Adds one element to the beginning of an array and returns the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=69 advanced=true\n    //% blockId=\"array_unshift\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value: T): number;\n\n    /**\n      * Returns a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% help=arrays/slice\n    //% helper=arraySlice weight=41 advanced=true blockNamespace=\"arrays\"\n    slice(start: number, end: number): T[];\n\n    /**\n      * Removes elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * Sorts the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Calls a defined callback function on each element of an array, and returns an array that contains the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Returns the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Removes the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element: T): boolean;\n\n    /** Removes the object at position index. */\n    //% help=arrays/removeat\n    //% shim=Array_::removeAt weight=49 advanced=true\n    //% blockId=\"array_removeat\" block=\"%list| remove value at %index\" blockNamespace=\"arrays\"\n    removeAt(index: number): T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/insertat\n    //% shim=Array_::insertAt weight=84 advanced=true\n    //% blockId=\"array_insertAt\" block=\"%list| insert at %index| value %value\" blockNamespace=\"arrays\"\n    insertAt(index: number, value: T): void;\n\n    /**\n      * Returns the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% help=arrays/indexof\n    //% shim=Array_::indexOf weight=50 advanced=true\n    //% blockId=\"array_indexof\" block=\"%list| find index of %value\" blockNamespace=\"arrays\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Gets the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% help=arrays/get\n    //% shim=Array_::getAt weight=85\n    get(index: number): T;\n\n    /**\n     * Stores the value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/set\n    //% shim=Array_::setAt weight=84\n    set(index: number, value: T): void;\n\n    [n: number]: T;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=49\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %list=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Returns the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=48\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=47\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Returns the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * Determines whether relative order of two strings (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=1000000\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start: number, length?: number): string;\n\n    // This block is currently disabled, as it does not compile in some targets\n    // Add % sign back to the block annotation to re-enable\n    /** Returns a value indicating if the string is empty */\n    //% shim=String_::isEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    // block=\"%this=text| is empty\"\n    isEmpty(): boolean;\n\n    [index: number]: string;\n}\n\n/**\n  * Converts A string to an integer.\n  * @param s A string to convert into a number.\n  */\n//% shim=String_::toNumber\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\ndeclare function parseInt(text: string): number;\n\ninterface Object { }\ninterface Function { }\ninterface IArguments { }\ninterface RegExp { }\n\ntype uint8 = number;\ntype uint16 = number;\ntype uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=Boolean_::toString\n    toString(): string;\n}\n\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/string-from-char-code\n    //% shim=String_::fromCharCode\n    //% advanced=true\n    //% blockNamespace=\"Math\" blockId=\"stringFromCharCode\" block=\"text from char code %code\" weight=1\n    function fromCharCode(code: number): string;\n}\n\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=Number_::toString\n    toString(): string;\n}\n\ndeclare namespace Math {\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and 1.\n     */\n    //% shim=Math_::random\n    //% helpUrl=\"/reference/math/random\"\n    function random(): number;\n\n    /**\n     * Returns a pseudorandom number between min and max included. \n     * If both numbers are integral, the result is integral.\n     * @param min the lower inclusive bound, eg: 0\n     * @param max the upper inclusive bound, eg: 10\n     */\n    //% blockId=\"device_random\" block=\"pick random %min|to %limit\"\n    //% helpUrl=\"/reference/math/random-range\"\n    //% shim=Math_::randomRange\n    function randomRange(min: number, max: number): number;\n\n    /**\n     * Returns the natural logarithm (base e) of a number.\n     * @param x A number\n     */\n    //% shim=Math_::log\n    function log(x: number): number;\n\n    /**\n     * Returns returns ``e^x``.\n     * @param x A number\n     */\n    //% shim=Math_::exp\n    function exp(x: number): number;\n\n    /**\n     * Returns the sine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::sin\n    function sin(x: number): number;\n\n    /**\n     * Returns the cosine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::cos\n    function cos(x: number): number;\n\n    /**\n     * Returns the tangent of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::tan\n    function tan(x: number): number;\n\n    /**\n     * Returns the arcsine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::asin\n    function asin(x: number): number;\n\n    /**\n     * Returns the arccosine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::acos\n    function acos(x: number): number;\n\n    /**\n     * Returns the arctangent (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::atan\n    function atan(x: number): number;\n\n    /**\n     * Returns the arctangent of the quotient of its arguments.\n     * @param y A number\n     * @param x A number\n     */\n    //% shim=Math_::atan2\n    function atan2(y: number, x: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n\n    /**\n     * Returns the smallest number greater than or equal to its numeric argument.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::ceil\n    function ceil(x: number): number;\n\n    /**\n      * Returns the greatest number less than or equal to its numeric argument.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::floor\n    function floor(x: number): number;\n\n    /**\n      * Returns the number with the decimal part truncated.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::trunc\n    function trunc(x: number): number;\n\n    /**\n      * Returns a supplied numeric expression rounded to the nearest number.\n      * @param x The value to be rounded to the nearest number.\n      */\n    //% shim=Math_::round\n    function round(x: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit multiplication of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::imul\n    function imul(x: number, y: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit division of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::idiv\n    function idiv(x: number, y: number): number;\n}\n",
      "pxt-helpers.ts": "type Action = () => void;\n\nnamespace helpers {\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n\n    export function arrayReverse<T>(arr: T[]): void {\n        let len = arr.length;\n        for (let i = 0; i < len / 2; i++) {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]): T {\n        return arr.removeAt(0);\n    }\n\n    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n            for(let i = values.length; i > 0; --i) {\n                arr.insertAt(0, values[i - 1]);\n            }\n            return arr.length;\n        }\n    */\n    export function arrayUnshift<T>(arr: T[], value: T): number {\n        arr.insertAt(0, value);\n        return arr.length;\n    }\n\n    function swap<T>(arr: T[], i: number, j: number): void {\n        let temp: T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }\n        let len = arr.length;\n        // simple selection sort.\n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j) {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn) {\n            //TODO: support native strings and number sorting\n            /* callbackfn = function (value1: string, value2: string) : number {\n                return value1.compare(value2);\n                }*/\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n\n    export function arraySlice<T>(arr: T[], start: number, end: number): T[] {\n        const res: T[] = [];\n        const len = arr.length;\n\n        if (start < 0) {\n            start = Math.max(len + start, 0);\n        }\n\n        if (end < 0) {\n            end = len + end;\n        }\n\n        const sliceLength = end - start;\n\n        for (let i = 0; i < sliceLength; ++i) {\n            const index = i + start;\n            if (index >= len) {\n                break;\n            }\n            res.push(arr[index]);\n        }\n        return res;\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions.\n      */\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions.\n      */\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n}\n",
      "pxt.json": "{\n    \"name\": \"core\",\n    \"description\": \"PXT blapp\",\n    \"files\": [\n        \"README.md\",\n        \"pxt-core.d.ts\",\n        \"pxt-helpers.ts\",\n        \"types.d.ts\",\n        \"sims.d.ts\",\n        \"ui.ts\",\n        \"data.ts\",\n        \"style.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"public\": true,\n    \"dependencies\": {}\n}",
      "sims.d.ts": "// Auto-generated from simulator. Do not edit.\ndeclare namespace UI {\n    //%\n    //% shim=UI::userInterfaceImpl\n    function userInterfaceImpl(theme: UITheme, body: () => void): void;\n\n    //%\n    //% shim=UI::groupElementImpl\n    function groupElementImpl(name: string, direction: UIGroupDirection, flex: boolean, className: UIGroupClass, style: StylePropertySet, children: () => void): void;\n\n    //%\n    //% shim=UI::scrollerElementImpl\n    function scrollerElementImpl(name: string, flex: boolean, className: UIGroupClass, horz: boolean, style: StylePropertySet, children: () => void): void;\n\n    //%\n    //% shim=UI::buttonElementImpl\n    function buttonElementImpl(name: string, flex: boolean, className: UIButtonClass, style: StylePropertySet, children: () => void, whenPressed: () => void): void;\n\n    //%\n    //% shim=UI::textElementImpl\n    function textElementImpl(flex: boolean, className: UITextClass, style: StylePropertySet, value: string): void;\n\n    //%\n    //% shim=UI::textInputElementImpl\n    function textInputElementImpl(name: string, flex: boolean, className: UITextInputClass, style: StylePropertySet, initialValue: string, whenTextChanges: (text: string) => void): void;\n\n    //%\n    //% shim=UI::imageElementImpl\n    function imageElementImpl(flex: boolean, width: number, height: number, style: StylePropertySet, url: string): void;\n\n    //%\n    //% shim=UI::dividerElementImpl\n    function dividerElementImpl(className: UIDividerClass, style: StylePropertySet): void;\n\n    //%\n    //% shim=UI::updateUIImpl\n    function updateUIImpl(): void;\n\n}\ndeclare namespace Style {\n    //%\n    //% shim=Style::styleDefImpl\n    function styleDefImpl(body: () => void): StylePropertySet;\n\n}\ndeclare namespace Data {\n    //%\n    //% shim=Data::getSharedStringImpl\n    function getSharedStringImpl(name: string): string;\n\n    //%\n    //% shim=Data::getSharedNumberImpl\n    function getSharedNumberImpl(name: string): number;\n\n    //%\n    //% shim=Data::getSharedBooleanImpl\n    function getSharedBooleanImpl(name: string): boolean;\n\n    //%\n    //% shim=Data::getSharedListImpl\n    function getSharedListImpl(name: string): string[];\n\n    //%\n    //% shim=Data::setSharedStringImpl\n    function setSharedStringImpl(name: string, v: string): void;\n\n    //%\n    //% shim=Data::setSharedNumberImpl\n    function setSharedNumberImpl(name: string, v: number): void;\n\n    //%\n    //% shim=Data::setSharedBooleanImpl\n    function setSharedBooleanImpl(name: string, v: boolean): void;\n\n    //%\n    //% shim=Data::setSharedListImpl\n    function setSharedListImpl(name: string, v: string[]): void;\n\n    //%\n    //% shim=Data::onSharedVariableChangeImpl\n    function onSharedVariableChangeImpl(name: string, body: () => void): void;\n\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "style.ts": "\r\n/**\r\n * Basic functionalities.\r\n */\r\n//% color=#00BCD4 weight=90\r\nnamespace Style {\r\n    /**\r\n     * Modify the visual appearance of a UI element\r\n    **/\r\n    //% weight=100\r\n    //% blockId=styledef\r\n    //% block=\"Rules %props=Array<StyleProperty>\"\r\n    //% acceptArrays=true\r\n    export function styleDef(props: StyleProperty[]): StylePropertySet {\r\n        return {};//styleDefImpl(null);\r\n    }\r\n\r\n    /**\r\n     * Set a property of a style\r\n    **/\r\n    //% weight=100\r\n    //% blockId=stylepropdef\r\n    //% block=\"Prop %prop|with %value=AnyValue\"\r\n    export function stylePropDef(name: string, value: AnyValue): StyleProperty {\r\n        let retval: StyleProperty = {};//styleDefImpl(null);\r\n        if (value) {\r\n            retval[name] = value.v;\r\n        }\r\n        return retval;\r\n    }\r\n\r\n}\r\n",
      "test.ts": "// let s = new Sprite()\n// s.forward(10)\n// let y = s.x\n",
      "types.d.ts": "declare interface StylePropertySet {\n   [key: string]: any;\n}\n\ndeclare interface StyleProperty {\n   [key: string]: any;\n}\n\ndeclare interface AnyValue{\n    v:any;\n}\n\ndeclare const enum UITheme {\n    //% block=calm\n    Calm,\n    //% block=bright\n    Bright,\n    //% block=wickeddahk\n    Dark\n}\ndeclare const enum UIGroupDirection {\n    //% block=column\n    Column,\n    //% block=row\n    Row,\n    //% block=reverse-column\n    ReverseColumn,\n    //% block=reverse-row\n    ReverseRow,\n}\ndeclare const enum UIGroupClass {\n    //% block=panel\n    Panel,\n    //% block=frame\n    Frame,\n    //% block=\"framed panel\"\n    Framepanel,\n    //% block=header\n    Header,\n    //% block=footer\n    Footer,\n    //% block=row\n    Row,\n    //% block=\"(none)\"\n    None\n}\ndeclare const enum UIButtonClass {\n    //% block=small\n    Small,\n    //% block=medium\n    Medium,\n    //% block=large\n    Large,\n    //% block=\"small (accented)\"\n    SmallAccent,\n    //% block=\"medium (accented)\"\n    MediumAccent,\n    //% block=\"large (accented)\"\n    LargeAccent,\n    //% block=\"(none)\"\n    None\n}\ndeclare const enum UITextClass {\n    //% block=label\n    Label,\n    //% block=button\n    Button,\n    //% block=\"button (accented)\"\n    AccentButton,\n    //% block=\"menu\"\n    Menu,\n    //% block=\"caption\"\n    Caption,\n    //% block=\"body\"\n    Body,\n    //% block=\"subtitle\"\n    Subtitle,\n    //% block=\"title\"\n    Title,\n    //% block=\"headline\"\n    Headline,\n    //% block=\"(none)\"\n    None\n}\ndeclare const enum UITextInputClass {\n    //% block=small\n    Inline,\n    //% block=medium\n    Form,\n    //% block=large\n    Headline,\n    //% block=\"(none)\"\n    None\n}\ndeclare const enum UIDividerClass {\n    //% block=\"horizontal top\"\n    HorzTop,\n    //% block=\"horizontal bottom\"\n    HorzBottom,\n    //% block=\"vertical left\"\n    VertLeft,\n    //% block=\"vertical right\"\n    VertRight,\n    //% block=\"(none)\"\n    None\n}\n\n",
      "ui.ts": "\n/**\n * Basic functionalities.\n */\n//% color=#00BCD4 weight=100\nnamespace UI {\n    /**\n     * The User Interface goes inside this\n     * @param theme the general look of various UI elements, eg: UITheme.Calm\n    **/\n    //% weight=100\n    //% blockId=user_interface\n    //% block=\"UI theme %theme\"\n    export function userInterface(theme: UITheme, body: Action) {\n        userInterfaceImpl(theme, body);\n    }\n    /**\n      * An element for grouping other elements\n      */\n    //% weight=90\n    //% blockId=group_element\n    //% block=\"Group id %name|dir %direction|flex %flex|class %className|style %style=StylePropertySet\"\n    //% handlerStmt=true\n    export function groupElement(\n        name: string,\n        direction: UIGroupDirection,\n        flex: boolean,\n        className: UIGroupClass,\n        style: StylePropertySet,\n        children: Action): void {\n        groupElementImpl(name, direction, flex, className, style, children);\n    }\n\n    /**\n      * An element for grouping other elements in a scrollable region\n      */\n    //% weight=30\n    //% blockId=scroller_element\n    //% block=\"Scroller id %name|flex %flex|class %className|horizontal? %horz|style %style\"\n    //% handlerStmt=true\n    export function scrollerElement(\n        name: string,\n        flex: boolean,\n        className: UIGroupClass,\n        horz: boolean,\n        style: StylePropertySet,\n        children: Action): void {\n        scrollerElementImpl(name, flex, className, horz, style, children);\n    }\n\n    /**\n     * A block for making a button\n     */\n    //% weight=70\n    //% blockId=button_element\n    //% block=\"Button id %name|flex %flex|class %className|style %style\"\n    //% handlerStmt=true\n    export function buttonElement(\n        name: string,\n        flex: boolean,\n        className: UIButtonClass,\n        style: StylePropertySet,\n        children: Action,\n        whenPressed: Action): void {\n        buttonElementImpl(name, flex, className, style, children, whenPressed);\n    }\n\n    /**\n     * A block for making a text element\n     */\n    //% weight=80\n    //% blockId=text_element\n    //% block=\"Text flex %flex|class %className|style %style|%value\"\n    //% handlerStmt=true\n    export function textElement(\n        flex: boolean,\n        className: UITextClass,\n        style: StylePropertySet,\n        value: string): void {\n        textElementImpl(flex, className, style, value);\n    }\n\n    export class WhenTextChangesArgs {\n        text: string;\n    }\n    /**\n     * A block for making a text input element\n     */\n    //% weight=50\n    //% blockId=textinput_element\n    //% block=\"Text Input id %name|flex %flex|class %className|style %style|initial %initialValue| when text changes\"\n    //% handlerStmt=true\n    //% mutate=objectdestructuring\n    //% mutateText=\"new text\"\n    //% mutateDefaults=\"text;text\"\n    export function textInputElement(\n        name: string,\n        flex: boolean,\n        className: UITextInputClass,\n        style: StylePropertySet,\n        initialValue: string,\n        whenTextChanges: (args: WhenTextChangesArgs) => void): void {\n\n        textInputElementImpl(name, flex, className, style, initialValue, (t) => {\n            let args = new WhenTextChangesArgs();\n            args.text = t;\n            whenTextChanges(args);\n        });\n    }\n\n    /**\n     * A block for making a image element\n     */\n    //% weight=60\n    //% blockId=image_element\n    //% block=\"Image flex %flex|width %width|height %height|style %style|URL %url\"\n    export function imageElement(\n        flex: boolean,\n        width: number,\n        height: number,\n        style: StylePropertySet,\n        url: string): void {\n        imageElementImpl(flex, width, height, style, url);\n    }\n\n    /**\n     * A block for making a divider element\n     */\n    //% weight=40\n    //% blockId=divider_element\n    //% block=\"Divider class %className|style %style\"\n    export function dividerElement(\n        className: UIDividerClass,\n        style: StylePropertySet): void {\n        dividerElementImpl(className, style);\n    }\n\n    /**\n     * Cause the UI to update\n    **/\n    //% weight=20\n    //% blockId=update_ui\n    //% block=\"Update UI\"\n    export function updateUI() {\n        updateUIImpl();\n    }\n}\n"
    }
  },
  "compile": {
    "isNative": false,
    "hasHex": false,
    "floatingPoint": true
  },
  "versions": {
    "target": "0.1.0",
    "pxt": "1.7.2"
  }
}