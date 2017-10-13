var pxtTargetBundle = {
  "id": "blapp",
  "name": "Phone Apps",
  "title": "Phone Apps Target",
  "corepkg": "core",
  "cloud": {
    "workspace": false,
    "packages": false,
    "sharing": false
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
    "listsBlocks": true,
    "functionBlocks": true
  },
  "simulator": {
    "autoRun": true
  },
  "appTheme": {
    "logoUrl": "/",
    "shareUrl": "http://localhost:3000/foo/bar",
    "homeUrl": "/",
    "embedUrl": "http://theblapp.azurewebsites.net/",
    "privacyUrl": "https://go.microsoft.com/fwlink/?LinkId=521839",
    "termsOfUseUrl": "https://go.microsoft.com/fwlink/?LinkID=206977",
    "docMenu": [
      {
        "name": "Download APK",
        "path": "/docs/downloadapk.html"
      },
      {
        "name": "About",
        "path": "/docs/about.html"
      },
      {
        "name": "Docs",
        "path": "/docs/docs.html"
      }
    ],
    "coloredToolbox": true,
    "monacoToolbox": true,
    "invertedMenu": true,
    "blocksOnly": true,
    "blocklyOptions": {
      "collapse": true,
      "comments": true,
      "disable": true,
      "trashcan": true,
      "grid": {
        "spacing": 45,
        "length": 7,
        "colour": "rgba(189, 195, 199, 0.30)",
        "snap": true
      }
    },
    "extendEditor": true,
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
            "nextName": "Array",
            "nextPath": "/types/array"
          },
          {
            "name": "Array",
            "subitems": [],
            "path": "/types/array",
            "prevName": "Boolean",
            "prevPath": "/types/boolean",
            "nextName": "Function",
            "nextPath": "/types/function"
          },
          {
            "name": "Function",
            "subitems": [],
            "path": "/types/function",
            "prevName": "Array",
            "prevPath": "/types/array",
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
            "prevName": "Function",
            "prevPath": "/types/function",
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
            "nextName": "Command Line Interface",
            "nextPath": "/cli"
          }
        ],
        "prevName": "Function",
        "prevPath": "/types/function"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Command Line Interface",
            "subitems": [],
            "path": "/cli",
            "prevName": "Streaming",
            "prevPath": "/streaming",
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
    "title": "Phone Apps Target",
    "name": "Phone Apps",
    "htmlDocIncludes": {}
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
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n<block type=\"pxt-on-start\"/>\n<block type=\"user_interface\"/>\n</xml>",
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
      "data.ts": "/**\n * Basic functionalities.\n */\n//% color=210 weight=80 icon=\"\\uf1e0\"\nnamespace Data {\n    /**\n     * get the current value of a shared text\n     */\n    //% weight=100\n    //% blockId=get_shared_string\n    //% block=\"shared string %name\"\n    export function getSharedString(name: string): string {\n        return getSharedStringImpl(name);\n    }\n\n    /**\n     * get the current value of a shared number\n     */\n    //% weight=90\n    //% blockId=get_shared_number\n    //% block=\"shared number %name\"\n    export function getSharedNumber(name: string): number {\n        return getSharedNumberImpl(name);\n    }\n\n    /**\n     * get the current value of a shared true/false value\n     */\n    //% weight=80\n    //% blockId=get_shared_boolean\n    //% block=\"shared true/false value %name\"\n    export function getSharedBoolean(name: string): boolean {\n        return getSharedBooleanImpl(name);\n    }\n\n    /**\n     * get the current value of a shared list of texts\n     */\n    //% weight=70\n    //% blockId=get_shared_string_list\n    //% block=\"shared list of texts %name\"\n    export function getSharedStringList(name: string): string[] {\n        return getSharedStringListImpl(name);\n    }\n\n  /**\n     * get the current value of a shared list of numbers\n     */\n    //% weight=60\n    //% blockId=get_shared_number_list\n    //% block=\"shared list of numbers %name\"\n    export function getSharedNumberList(name: string): number[] {\n        return getSharedNumberListImpl(name);\n    }\n\n    /**\n     * sets a shared text value\n     */\n    //% weight=50\n    //% blockId=set_shared_string\n    //% block=\"set shared string %name|to %v\"\n    export function setSharedString(name: string, v: string): void {\n        return setSharedStringImpl(name, v);\n    }\n\n    /**\n     * sets a shared number value\n     */\n    //% weight=40\n    //% blockId=set_shared_number\n    //% block=\"set shared number %name|to %v\"\n    export function setSharedNumber(name: string, v: number): void {\n        return setSharedNumberImpl(name, v);\n    }\n\n    /**\n     * sets a shared true/false value\n     */\n    //% weight=30\n    //% blockId=set_shared_boolean\n    //% block=\"set shared true/false value %name|to %v\"\n    export function setSharedBoolean(name: string, v: boolean): void {\n        return setSharedBooleanImpl(name, v);\n    }\n\n    /**\n     * sets a shared list of texts\n     */\n    //% weight=29\n    //% blockId=set_shared_string_list\n    //% block=\"set shared list of texts %name|to %v\"\n    export function setSharedStringList(name: string, v: string[]): void {\n        return setSharedStringListImpl(name, v);\n    }\n\n   /**\n     * sets a shared list of numbers\n     */\n    //% weight=28\n    //% blockId=set_shared_number_list\n    //% block=\"set shared list of numbers %name|to %v\"\n    export function setSharedNumberList(name: string, v: number[]): void {\n        return setSharedNumberListImpl(name, v);\n    }\n\n    /**\n     * when a shared variable is changed, make something happen\n    **/\n    //% weight=27\n    //% blockId=on_shared_change\n    //% block=\"When shared %name|changes\"\n    export function onSharedVariableChange(name: string, body: ()=>void): void {\n        onSharedVariableChangeImpl(name, body);\n    }\n\n    /**\n     * convert number to text\n     */\n    //% weight=26\n    //% blockId=convert_number_to_text\n    //% block=\"To text %value\"\n    //% blockNamespace=text\n    export function convertNumberToText(value: number): string {\n        if (value === undefined)\n            return null;\n        else\n            return value.toString();\n    }\n\n    /**\n     * test whether text contains another text\n     */\n    //% weight=27\n    //% blockId=text_contains_text\n    //% block=\"Does %text|contain %subtext\"\n    //% blockNamespace=text\n    export function textContainsText(text:string,subtext:string): boolean {\n        return textContainsImpl(text,subtext);\n    }\n\n    /**\n     * Perform an operation for each value of a string\n     */\n    //% weight=25\n    //% blockId=for_each_string\n    //% block=\"for each string %array\"\n    //% externallyLoadedBlock=true\n    //% blockNamespace=loops\n    export function forEachString(array: string[], cb: (value: string, index: number) => void) {\n        for (let i = 0; i < array.length; i++) {\n            cb(array[i], i);\n        }\n    }\n}",
      "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Get or set the length of an array. This number is one more than the index of the last element the array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"arrays\"\n    length: number;\n\n    /**\n      * Append a new element to an array.\n      * @param items New elements of the Array.\n      */\n    //% help=arrays/push\n    //% shim=Array_::push weight=49\n    //% blockId=\"array_push\" block=\"%list| add value %value| to end\" blockNamespace=\"arrays\"\n    push(item: T): void;\n\n    /**\n      * Remove the last element from an array and return it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=48\n    //% blockId=\"array_pop\" block=\"get and remove last value from %list\" blockNamespace=\"arrays\"\n    pop(): T;\n\n    /**\n      * Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% help=arrays/reverse\n    //% helper=arrayReverse weight=10 advanced=true\n    //% blockId=\"array_reverse\" block=\"reverse %list\" blockNamespace=\"arrays\"\n    reverse(): void;\n\n    /**\n      * Remove the first element from an array and return it. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=70 advanced=true\n    //% blockId=\"array_shift\" block=\"get and remove first value from %list\" blockNamespace=\"arrays\"\n    shift(): T;\n\n    /**\n      * Add one element to the beginning of an array and return the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=69 advanced=true\n    //% blockId=\"array_unshift\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value: T): number;\n\n    /**\n      * Return a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% help=arrays/slice\n    //% helper=arraySlice weight=41 advanced=true blockNamespace=\"arrays\"\n    slice(start: number, end: number): T[];\n\n    /**\n      * Remove elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * Sort the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Call a defined callback function on each element of an array, and return an array containing the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Return the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Remove the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element: T): boolean;\n\n    /** Remove the element at a certain index. */\n    //% help=arrays/remove-at\n    //% shim=Array_::removeAt weight=49 advanced=true\n    //% blockId=\"array_removeat\" block=\"%list| remove value at %index\" blockNamespace=\"arrays\"\n    removeAt(index: number): T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/insert-at\n    //% shim=Array_::insertAt weight=84 advanced=true\n    //% blockId=\"array_insertAt\" block=\"%list| insert at %index| value %value\" blockNamespace=\"arrays\"\n    insertAt(index: number, value: T): void;\n\n    /**\n      * Return the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% help=arrays/index-of\n    //% shim=Array_::indexOf weight=50 advanced=true\n    //% blockId=\"array_indexof\" block=\"%list| find index of %value\" blockNamespace=\"arrays\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Get the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% help=arrays/get\n    //% shim=Array_::getAt weight=85\n    get(index: number): T;\n\n    /**\n     * Store a value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/set\n    //% shim=Array_::setAt weight=84\n    set(index: number, value: T): void;\n\n    [n: number]: T;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=49\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %list=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Return the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=48\n    //% help=text/char-at\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=47\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Return the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * See how the order of characters in two strings is different (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% help=text/compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=1000000\n    //% help=text/substr\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start: number, length?: number): string;\n\n    // This block is currently disabled, as it does not compile in some targets\n    // Add % sign back to the block annotation to re-enable\n    /** Returns a value indicating if the string is empty */\n    //% shim=String_::isEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    // block=\"%this=text| is empty\"\n    isEmpty(): boolean;\n\n    [index: number]: string;\n}\n\n/**\n  * Convert a string to an integer.\n  * @param s A string to convert into a number.\n  */\n//% shim=String_::toNumber\n//% help=text/parse-int\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\ndeclare function parseInt(text: string): number;\n\ninterface Object { }\ninterface Function { }\ninterface IArguments { }\ninterface RegExp { }\n\ntype uint8 = number;\ntype uint16 = number;\ntype uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=Boolean_::toString\n    toString(): string;\n}\n\n/**\n * Combine, split, and search text strings.\n*/\n//% blockNamespace=\"Text\"\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/string-from-char-code\n    //% shim=String_::fromCharCode\n    //% advanced=true\n    //% blockNamespace=\"Math\" blockId=\"stringFromCharCode\" block=\"text from char code %code\" weight=1\n    function fromCharCode(code: number): string;\n}\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=Number_::toString\n    toString(): string;\n}\n\n/**\n * Add, remove, and replace items in lists.\n*/\n//% blockNamespace=\"Arrays\"\ndeclare namespace Array {\n}\n\n/**\n * More complex operations with numbers.\n*/\ndeclare namespace Math {\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and 1.\n     */\n    //% shim=Math_::random\n    //% helpUrl=\"/reference/math/random\"\n    function random(): number;\n\n    /**\n     * Returns a pseudorandom number between min and max included. \n     * If both numbers are integral, the result is integral.\n     * @param min the lower inclusive bound, eg: 0\n     * @param max the upper inclusive bound, eg: 10\n     */\n    //% blockId=\"device_random\" block=\"pick random %min|to %limit\"\n    //% helpUrl=\"/reference/math/random-range\"\n    //% shim=Math_::randomRange\n    function randomRange(min: number, max: number): number;\n\n    /**\n     * Returns the natural logarithm (base e) of a number.\n     * @param x A number\n     */\n    //% shim=Math_::log\n    function log(x: number): number;\n\n    /**\n     * Returns returns ``e^x``.\n     * @param x A number\n     */\n    //% shim=Math_::exp\n    function exp(x: number): number;\n\n    /**\n     * Returns the sine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::sin\n    function sin(x: number): number;\n\n    /**\n     * Returns the cosine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::cos\n    function cos(x: number): number;\n\n    /**\n     * Returns the tangent of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::tan\n    function tan(x: number): number;\n\n    /**\n     * Returns the arcsine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::asin\n    function asin(x: number): number;\n\n    /**\n     * Returns the arccosine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::acos\n    function acos(x: number): number;\n\n    /**\n     * Returns the arctangent (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::atan\n    function atan(x: number): number;\n\n    /**\n     * Returns the arctangent of the quotient of its arguments.\n     * @param y A number\n     * @param x A number\n     */\n    //% shim=Math_::atan2\n    function atan2(y: number, x: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n\n    /**\n     * Returns the smallest number greater than or equal to its numeric argument.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::ceil\n    function ceil(x: number): number;\n\n    /**\n      * Returns the greatest number less than or equal to its numeric argument.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::floor\n    function floor(x: number): number;\n\n    /**\n      * Returns the number with the decimal part truncated.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::trunc\n    function trunc(x: number): number;\n\n    /**\n      * Returns a supplied numeric expression rounded to the nearest number.\n      * @param x The value to be rounded to the nearest number.\n      */\n    //% shim=Math_::round\n    function round(x: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit multiplication of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::imul\n    function imul(x: number, y: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit division of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::idiv\n    function idiv(x: number, y: number): number;\n}\n",
      "pxt-helpers.ts": "type Action = () => void;\n\nnamespace helpers {\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n\n    export function arrayReverse<T>(arr: T[]): void {\n        let len = arr.length;\n        for (let i = 0; i < len / 2; i++) {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]): T {\n        return arr.removeAt(0);\n    }\n\n    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n            for(let i = values.length; i > 0; --i) {\n                arr.insertAt(0, values[i - 1]);\n            }\n            return arr.length;\n        }\n    */\n    export function arrayUnshift<T>(arr: T[], value: T): number {\n        arr.insertAt(0, value);\n        return arr.length;\n    }\n\n    function swap<T>(arr: T[], i: number, j: number): void {\n        let temp: T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }\n        let len = arr.length;\n        // simple selection sort.\n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j) {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn) {\n            //TODO: support native strings and number sorting\n            /* callbackfn = function (value1: string, value2: string) : number {\n                return value1.compare(value2);\n                }*/\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n\n    export function arraySlice<T>(arr: T[], start: number, end: number): T[] {\n        const res: T[] = [];\n        const len = arr.length;\n\n        if (start < 0) {\n            start = Math.max(len + start, 0);\n        }\n\n        if (end < 0) {\n            end = len + end;\n        }\n\n        const sliceLength = end - start;\n\n        for (let i = 0; i < sliceLength; ++i) {\n            const index = i + start;\n            if (index >= len) {\n                break;\n            }\n            res.push(arr[index]);\n        }\n        return res;\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions.\n      */\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions.\n      */\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n}\n",
      "pxt.json": "{\n    \"name\": \"core\",\n    \"description\": \"PXT blapp\",\n    \"files\": [\n        \"README.md\",\n        \"pxt-core.d.ts\",\n        \"pxt-helpers.ts\",\n        \"types.d.ts\",\n        \"sims.d.ts\",\n        \"ui.ts\",\n        \"data.ts\",\n        \"style.ts\",\n        \"time.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"public\": true,\n    \"dependencies\": {}\n}",
      "sims.d.ts": "// Auto-generated from simulator. Do not edit.\ndeclare namespace UI {\n    //%\n    //% shim=UI::userInterfaceImpl\n    function userInterfaceImpl(theme: UITheme, body: () => void): void;\n\n    //%\n    //% shim=UI::groupElementImpl\n    function groupElementImpl(name: string, direction: UIGroupDirection, flex: boolean, className: UIGroupClass, style: string[], children: () => void): void;\n\n    //%\n    //% shim=UI::scrollerElementImpl\n    function scrollerElementImpl(name: string, flex: boolean, className: UIGroupClass, horz: boolean, style: string[], children: () => void): void;\n\n    //%\n    //% shim=UI::buttonElementImpl\n    function buttonElementImpl(name: string, flex: boolean, className: UIButtonClass, style: string[], children: () => void, whenPressed: () => void): void;\n\n    //%\n    //% shim=UI::textElementImpl\n    function textElementImpl(flex: boolean, className: UITextClass, style: string[], value: string): void;\n\n    //%\n    //% shim=UI::textInputElementImpl\n    function textInputElementImpl(name: string, flex: boolean, className: UITextInputClass, style: string[], initialValue: string, whenTextChanges: (text: string) => void): void;\n\n    //%\n    //% shim=UI::imageElementImpl\n    function imageElementImpl(flex: boolean, width: number, height: number, style: string[], url: string): void;\n\n    //%\n    //% shim=UI::dividerElementImpl\n    function dividerElementImpl(className: UIDividerClass, style: string[]): void;\n\n    //%\n    //% shim=UI::updateUIImpl\n    function updateUIImpl(): void;\n\n    //%\n    //% shim=UI::iconElementImpl\n    function iconElementImpl(category: string, name: number, iconType: IconType, size: number, style: string[]): void;\n\n}\ndeclare namespace Style {\n    //%\n    //% shim=Style::stylePropAlignContentImpl\n    function stylePropAlignContentImpl(v: StyAlignContent): string;\n\n    //%\n    //% shim=Style::stylePropAlignItemsImpl\n    function stylePropAlignItemsImpl(v: StyAlignItems): string;\n\n    //%\n    //% shim=Style::stylePropAlignSelfImpl\n    function stylePropAlignSelfImpl(v: StyAlignItems): string;\n\n    //%\n    //% shim=Style::stylePropFlexDirectionImpl\n    function stylePropFlexDirectionImpl(v: StyFlexDirection): string;\n\n    //%\n    //% shim=Style::stylePropJustifyContentImpl\n    function stylePropJustifyContentImpl(v: StyAlignContent): string;\n\n    //%\n    //% shim=Style::stylePropFlexWrapImpl\n    function stylePropFlexWrapImpl(v: StyFlexWrap): string;\n\n    //%\n    //% shim=Style::stylePropPositionImpl\n    function stylePropPositionImpl(v: StyPosition): string;\n\n    //%\n    //% shim=Style::stylePropOffsetImpl\n    function stylePropOffsetImpl(v: StyOffsetType, p: number): string;\n\n    //%\n    //% shim=Style::stylePropAspectRatioImpl\n    function stylePropAspectRatioImpl(v: number): string;\n\n    //%\n    //% shim=Style::stylePropBackgroundColorImpl\n    function stylePropBackgroundColorImpl(v: string): string;\n\n    //%\n    //% shim=Style::stylePropBorderColorImpl\n    function stylePropBorderColorImpl(p: StyBoxSide, v: string): string;\n\n    //%\n    //% shim=Style::stylePropBorderRadiusImpl\n    function stylePropBorderRadiusImpl(p: StyBoxCorner, v: number): string;\n\n    //%\n    //% shim=Style::stylePropBorderWidthImpl\n    function stylePropBorderWidthImpl(p: StyBoxSide, v: number): string;\n\n    //%\n    //% shim=Style::stylePropBorderStyleImpl\n    function stylePropBorderStyleImpl(v: StyBorderStyle): string;\n\n    //%\n    //% shim=Style::stylePropFlexValuesImpl\n    function stylePropFlexValuesImpl(p: StyFlexType, v: number): string;\n\n    //%\n    //% shim=Style::stylePropSizeImpl\n    function stylePropSizeImpl(p: StyPropSize, v: number): string;\n\n    //%\n    //% shim=Style::stylePropMarginImpl\n    function stylePropMarginImpl(p: StyPropMargin, v: number): string;\n\n    //%\n    //% shim=Style::stylePropPaddingImpl\n    function stylePropPaddingImpl(p: StyPropPadding, v: number): string;\n\n    //%\n    //% shim=Style::stylePropOverflowImpl\n    function stylePropOverflowImpl(v: StyPropOverflow): string;\n\n    //%\n    //% shim=Style::stylePropOpacityImpl\n    function stylePropOpacityImpl(v: number): string;\n\n    //%\n    //% shim=Style::stylePropImageResizeModeImpl\n    function stylePropImageResizeModeImpl(v: StyImageResizeMode): string;\n\n    //%\n    //% shim=Style::stylePropImageTintColorImpl\n    function stylePropImageTintColorImpl(v: string): string;\n\n    //%\n    //% shim=Style::stylePropTextColorImpl\n    function stylePropTextColorImpl(v: string): string;\n\n    //%\n    //% shim=Style::stylePropTextFontFamilyImpl\n    function stylePropTextFontFamilyImpl(v: string): string;\n\n    //%\n    //% shim=Style::stylePropTextFontSizeImpl\n    function stylePropTextFontSizeImpl(v: number): string;\n\n    //%\n    //% shim=Style::stylePropTextFontStyleImpl\n    function stylePropTextFontStyleImpl(v: StyTextFontStyle): string;\n\n    //%\n    //% shim=Style::stylePropTextFontWeightImpl\n    function stylePropTextFontWeightImpl(v: StyTextFontWeight): string;\n\n    //%\n    //% shim=Style::stylePropTextLineHeightImpl\n    function stylePropTextLineHeightImpl(v: number): string;\n\n    //%\n    //% shim=Style::stylePropTextAlignImpl\n    function stylePropTextAlignImpl(v: StyTextAlign): string;\n\n    //%\n    //% shim=Style::stylePropTextDecorationLineImpl\n    function stylePropTextDecorationLineImpl(v: StyTextDecorationLine): string;\n\n}\ndeclare namespace Data {\n    //%\n    //% shim=Data::getSharedStringImpl\n    function getSharedStringImpl(name: string): string;\n\n    //%\n    //% shim=Data::getSharedNumberImpl\n    function getSharedNumberImpl(name: string): number;\n\n    //%\n    //% shim=Data::getSharedBooleanImpl\n    function getSharedBooleanImpl(name: string): boolean;\n\n    //%\n    //% shim=Data::getSharedStringListImpl\n    function getSharedStringListImpl(name: string): string[];\n\n    //%\n    //% shim=Data::getSharedNumberListImpl\n    function getSharedNumberListImpl(name: string): number[];\n\n    //%\n    //% shim=Data::setSharedStringImpl\n    function setSharedStringImpl(name: string, v: string): void;\n\n    //%\n    //% shim=Data::setSharedNumberImpl\n    function setSharedNumberImpl(name: string, v: number): void;\n\n    //%\n    //% shim=Data::setSharedBooleanImpl\n    function setSharedBooleanImpl(name: string, v: boolean): void;\n\n    //%\n    //% shim=Data::setSharedStringListImpl\n    function setSharedStringListImpl(name: string, v: string[]): void;\n\n    //%\n    //% shim=Data::setSharedNumberListImpl\n    function setSharedNumberListImpl(name: string, v: number[]): void;\n\n    //%\n    //% shim=Data::onSharedVariableChangeImpl\n    function onSharedVariableChangeImpl(name: string, body: () => void): void;\n\n    //%\n    //% shim=Data::textContainsImpl\n    function textContainsImpl(text: string, subtext: string): boolean;\n\n}\ndeclare namespace Time {\n    //%\n    //% shim=Time::afterTimeImpl\n    function afterTimeImpl(ms: number, body: () => void): void;\n\n    //%\n    //% shim=Time::everyTimeImpl\n    function everyTimeImpl(ms: number, body: () => void): void;\n\n    //%\n    //% shim=Time::resetApplicationImpl\n    function resetApplicationImpl(): void;\n\n    //%\n    //% shim=Time::whenAppResetImpl\n    function whenAppResetImpl(body: () => void): void;\n\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "style.ts": "\n/**\n * Basic functionalities.\n */\n//% color=255 weight=90 icon=\"\\uf013\"\nnamespace Style {\n    /**\n     * align content controls how rows align in the cross direction\n     */\n    //% blockId=styleprop_aligncontent\n    //% block=\"align content %v\"\n    //% subcategory=Layout\n    export function stylePropAlignContent(v: StyAlignContent): string {\n        return stylePropAlignContentImpl(v);\n    }\n\n    /**\n     * align items aligns children in the cross direction. For example, \n     * if children are flowing vertically, align items controls how they align horizontally.\n     */\n    //% blockId=styleprop_alignitems\n    //% block=\"align items %v\"\n    //% subcategory=Layout\n    export function stylePropAlignItems(v: StyAlignItems): string {\n        return stylePropAlignItemsImpl(v);\n    }\n\n    /**\n     * align self controls how a child aligns \n     * in the cross direction, overriding the align items of the parent.\n     */\n    //% blockId=styleprop_alignself\n    //% block=\"align self %v\"\n    //% subcategory=Layout\n    export function stylePropAlignSelf(v: StyAlignItems): string {\n        return stylePropAlignSelfImpl(v);\n    }\n\n    /**\n     * flex direction controls which directions children of a container go. \n     * row goes left to right, column goes top to bottom, and you may be \n     * able to guess what the other two do. \n     */\n    //% blockId=styleprop_flexdirection\n    //% block=\"flex direction %v\"\n    //% subcategory=Layout\n    export function stylePropFlexDirection(v: StyFlexDirection): string {\n        return stylePropFlexDirectionImpl(v);\n    }\n\n    /**\n     * justify content aligns children in the main direction. For example, if children \n     * are flowing vertically, justify content controls how they align vertically. \n     */\n    //% blockId=styleprop_justifycontent\n    //% block=\"justify content %v\"\n    //% subcategory=Layout\n    export function stylePropJustifyContent(v: StyAlignContent): string {\n        return stylePropJustifyContentImpl(v);\n    }\n\n    /**\n     * flex wrap controls whether children can wrap around after they hit the \n     * end of a flex container. \n     */\n    //% blockId=styleprop_flexwrap\n    //% block=\"wrap content %v\"\n    //% subcategory=Layout\n    export function stylePropFlexWrap(v: StyFlexWrap): string {\n        return stylePropFlexWrapImpl(v);\n    }\n\n    /**\n     * If you want to position a child using specific numbers of logical pixels \n     * relative to its parent, set the child to have absolute position.\n     */\n    //% blockId=styleprop_position\n    //% block=\"position %v\"\n    //% subcategory=Layout\n    export function stylePropPosition(v: StyPosition): string {\n        return stylePropPositionImpl(v);\n    }\n\n\n    /**\n     * bottom is the number of logical pixels to offset the bottom edge of this component.\n     * left is the number of logical pixels to offset the left edge of this component.\n     * right is the number of logical pixels to offset the right edge of this component.\n     * top is the number of logical pixels to offset the top edge of this component.\n     * right is the number of logical pixels to offset the right edge of this component.\n     * zIndex controls which components display on top of others. \n     * \n     */\n    //% blockId=styleprop_offset\n    //% block=\"offset %v|%p\"\n    //% subcategory=Layout\n    export function stylePropOffset(v: StyOffsetType, p: number): string {\n        return stylePropOffsetImpl(v,p);\n    }\n\n    /**\n     * Aspect ratio controls the size of the undefined dimension of an element.\n     */\n    //% blockId=styleprop_aspectratio\n    //% block=\"aspect ratio %v\"\n    //% subcategory=Layout\n    export function stylePropAspectRatio(v: number): string {\n        return stylePropAspectRatioImpl(v);\n    }\n\n    /**\n     * background color sets the color for the background of the UI element.\n     */\n    //% blockId=styleprop_backgroundcolor\n    //% block=\"background color %v\"\n    //% subcategory=Color\n    export function stylePropBackgroundColor(v: string): string {\n        return stylePropBackgroundColorImpl(v);\n    }\n\n    //     //% blockId=styleprop_generic'] = {\n    //     init: function () {\n    //         this.appendValueInput(\"VALUE\")\n    //             .setCheck(null)\n    //             .appendField(\"style property\")\n    //             .appendField(new Blockly.FieldDropdown([\n    //                 [\"align items\", \"alignItems\"],\n    //                 [\"align self\", \"alignSelf\"],\n    //                 [\"backface visibility\", \"backfaceVisibility\"],\n    //                 [\"background color\", \"backgroundColor\"],\n    //                 [\"border bottom color\", \"borderBottomColor\"],\n    //                 [\"border bottom left radius\", \"borderBottomLeftRadius\"],\n    //                 [\"border bottom right radius\", \"borderBottomRightRadius\"],\n    //                 [\"border bottom width\", \"borderBottomWidth\"],\n    //                 [\"border color\", \"borderColor\"],\n    //                 [\"border left color\", \"borderLeftColor\"],\n    //                 [\"border left width\", \"borderLeftWidth\"],\n    //                 [\"border radius\", \"borderRadius\"],\n    //                 [\"border right color\", \"borderRightColor\"],\n    //                 [\"border right width\", \"borderRightWidth\"],\n    //                 [\"border style\", \"borderStyle\"],\n    //                 [\"border top color\", \"borderTopColor\"],\n    //                 [\"border top left radius\", \"borderTopLeftRadius\"],\n    //                 [\"border top right radius\", \"borderTopRightRadius\"],\n    //                 [\"border top width\", \"borderTopWidth\"],\n    //                 [\"border width\", \"borderWidth\"],\n    //                 [\"direction\", \"direction\"],\n    //                 [\"display\", \"display\"],\n    //                 [\"flex\", \"flex\"],\n    //                 [\"flex basis\", \"flexBasis\"],\n    //                 [\"flex direction\", \"flexDirection\"],\n    //                 [\"flex grow,\", \"flexGrow\"],\n    //                 [\"flex shrink\", \"flexShrink\"],\n    //                 [\"flex wrap\", \"flexWrap\"],\n    //                 [\"height\", \"height\"],\n    //                 [\"justify content\", \"justifyContent\"],\n    //                 [\"left\", \"left\"],\n    //                 [\"margin\", \"margin\"],\n    //                 [\"margin bottom\", \"marginBottom\"],\n    //                 [\"margin horizontal\", \"marginHorizontal\"],\n    //                 [\"margin left\", \"marginLeft\"],\n    //                 [\"margin right\", \"marginRight\"],\n    //                 [\"margin top\", \"marginTop\"],\n    //                 [\"margin vertical\", \"marginVertical\"],\n    //                 [\"max height\", \"maxHeight\"],\n    //                 [\"max width\", \"maxWidth\"],\n    //                 [\"min height\", \"minHeight\"],\n    //                 [\"min width\", \"minWidth\"],\n    //                 [\"opacity\", \"opacity\"],\n    //                 [\"overflow\", \"overflow\"],\n    //                 [\"padding\", \"padding\"],\n    //                 [\"padding bottom\", \"paddingBottom\"],\n    //                 [\"padding horizontal\", \"paddingHorizontal\"],\n    //                 [\"padding left\", \"paddingLeft\"],\n    //                 [\"padding right\", \"paddingRight\"],\n    //                 [\"padding top\", \"paddingTop\"],\n    //                 [\"padding vertical\", \"paddingVertical\"],\n    //                 [\"position\", \"position\"],\n    //                 [\"right\", \"right\"],\n    //                 [\"top\", \"top\"],\n    //                 [\"width\", \"width\"]]), \"PROPNAME\");\n    //         this.setPreviousStatement(true, \"STYLEPROP\");\n    //         this.setNextStatement(true, \"STYLEPROP\");\n    //         this.setColour(230);\n    //         this.setTooltip('');\n    //         this.setHelpUrl('');\n    //     }\n    // };\n\n    /**\n     * sets the color of part or all of the border\n     */\n    //% blockId=styleprop_bordercolor\n    //% block=\"border color %p|%v\"\n    //% subcategory=Box\n    export function stylePropBorderColor(p: StyBoxSide, v: string): string {\n        return stylePropBorderColorImpl(p,v);\n    }\n\n    /**\n     * Border radius defines how rounded the corners of the border (and the background) are.\n     */\n    //% blockId=styleprop_borderradius\n    //% block=\"border radius %p|%v\"\n    //% subcategory=Box\n    export function stylePropBorderRadius(p: StyBoxCorner, v: number): string {\n        return stylePropBorderRadiusImpl(p,v);\n    }\n\n    /**\n     * border width controls the width of the border.\n     */\n    //% blockId=styleprop_borderwidth\n    //% block=\"border width %p|%v\"\n    //% subcategory=Box\n    export function stylePropBorderWidth(p: StyBoxSide, v: number): string {\n        return stylePropBorderWidthImpl(p,v);\n    }\n\n    /**\n     * border style defines the line style of the border.\n     */\n    //% blockId=styleprop_borderstyle\n    //% block=\"border style %v\"\n    //% subcategory=Box\n    export function stylePropBorderStyle(v: StyBorderStyle): string {\n        return stylePropBorderStyleImpl(v);\n    }\n\n    /**\n     * When flex is a positive number, it makes the component flexible and it will\n     * be sized proportional to its flex value. So a component with flex set to \n     * 2 will take twice the space as a component with flex set to 1. When flex \n     * is 0, the component is sized according to width and height and it is inflexible. \n     * When flex is -1, the component is normally sized according width and height. \n     * However, if there's not enough space, the component will shrink to its minWidth \n     * and minHeight.\n     */\n    //% blockId=styleprop_flexvalues\n    //% block=\"flex %p|%v\"\n    //% subcategory=Layout\n    export function stylePropFlexValues(p: StyFlexType, v: number): string {\n        return stylePropFlexValuesImpl(p,v);\n    }\n\n    /**\n     * height sets the height of this component. width sets the width of this component.\n     * max height is the maximum height for this component, in logical pixels. \n     * max width is the maximum width for this component, in logical pixels.\n     * min height is the minimum height for this component, in logical pixels.\n     * min width is the minimum width for this component, in logical pixels.\n     */\n    //% blockId=styleprop_size\n    //% block=\"size %p|%v\"\n    //% subcategory=Layout\n    export function stylePropSize(p: StyPropSize, v: number): string {\n        return stylePropSizeImpl(p,v);\n    }\n\n    /**\n     * Sets the width of part or all of the margin area (area outside the border)\n     * of the UI element\n     */\n    //% blockId=styleprop_margin\n    //% block=\"margin %p|%v\"\n    //% subcategory=Box\n    export function stylePropMargin(p: StyPropMargin, v: number): string {\n        return stylePropMarginImpl(p,v);\n    }\n\n    /**\n     *  Sets the width of part or all of the padding area (area between the border and\n     * the contents) of the UI element\n     */\n    //% blockId=styleprop_padding\n    //% block=\"padding %p|%v\"\n    //% subcategory=Box\n    export function stylePropPadding(p: StyPropPadding, v: number): string {\n        return stylePropPaddingImpl(p,v);\n    }\n\n    /**\n     * Overflow specifies whether to clip content, show scrollbars, or display \n     * overflowing content when it is too large for the element. \n     */\n    //% blockId=styleprop_overflow\n    //% block=\"overflow %v\"\n    //% subcategory=Layout\n    export function stylePropOverflow(v: StyPropOverflow): string {\n        return stylePropOverflowImpl(v);\n    }\n\n    /**\n     * Opacity specifies the level of transparency of an element, that is, \n     * the degree to which the content behind the element is visible.\n     * @param v [0-1] e.g. 1\n     */\n    //% blockId=styleprop_opacity\n    //% block=\"opacity %v\"\n    //% subcategory=Color\n    export function stylePropOpacity(v: number): string {\n        return stylePropOpacityImpl(v);\n    }\n\n    /**\n     * resize mode Determines how to resize the image when the frame doesn't match the raw image dimensions.\n     * 'cover': Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding). \n     * 'contain': Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).\n     * 'stretch': Scale width and height independently, This may change the aspect ratio of the src.\n     * 'repeat': Repeats the image within the frame.\n     * 'center': Centers the image within the frame.\n     */\n    //% blockId=styleprop_image_resizemode\n    //% block=\"resize mode %v\"\n    //% subcategory=Image\n    export function stylePropImageResizeMode(v: StyImageResizeMode): string {\n        return stylePropImageResizeModeImpl(v);\n    }\n\n    /**\n     * tint color changes all the non-alpha pixels of the image\n     */\n    //% blockId=styleprop_image_tintcolor\n    //% block=\"tint color %v\"\n    //% subcategory=Image\n    export function stylePropImageTintColor(v: string): string {\n        return stylePropImageTintColorImpl(v);\n    }\n\n    /**\n     * text color controls the color of the text\n     */\n    //% blockId=styleprop_text_color\n    //% block=\"text color %v\"\n    //% subcategory=\"Text styles\"\n    export function stylePropTextColor(v: string): string {\n        return stylePropTextColorImpl(v);\n    }\n\n    /**\n     * font family controls the font used to display text\n     */\n    //% blockId=styleprop_text_fontfamily\n    //% block=\"font family %v\"\n    //% subcategory=\"Text styles\"\n    export function stylePropTextFontFamily(v: string): string {\n        return stylePropTextFontFamilyImpl(v);\n    }\n\n    /**\n     * font size controls the size of the text\n     * @param v : [5-144] eg. 12\n     */\n    //% blockId=styleprop_text_fontsize\n    //% block=\"font size %v\"\n    //% subcategory=\"Text styles\"\n    export function stylePropTextFontSize(v: number): string {\n        return stylePropTextFontSizeImpl(v);\n    }\n\n    /**\n     * font style controls whether the text is italic\n     */\n    //% blockId=styleprop_text_fontstyle\n    //% block=\"font style %v\"\n    //% subcategory=\"Text styles\"\n    export function stylePropTextFontStyle(v: StyTextFontStyle): string {\n        return stylePropTextFontStyleImpl(v);\n    }\n\n    /**\n     * font weight specifies font weight. The values 'normal' and 'bold' are \n     * supported for most fonts. Not all fonts have a variant for each of the \n     * numeric values, in that case the closest one is chosen.\n     */\n    //% blockId=styleprop_text_fontweight\n    //% block=\"font weight %v\"\n    //% subcategory=\"Text styles\"\n    export function stylePropTextFontWeight(v: StyTextFontWeight): string {\n        return stylePropTextFontWeightImpl(v);\n    }\n\n    /**\n     * sets the amount of space used for lines.\n     */\n    //% blockId=styleprop_text_lineheight\n    //% block=\"line height %v\"\n    //% subcategory=\"Text styles\"\n    export function stylePropTextLineHeight(v: number): string {\n        return stylePropTextLineHeightImpl(v);\n    }\n\n    /**\n     * alignment specifies the horizontal alignment of text in an element.\n     */\n    //% blockId=styleprop_text_textalign\n    //% block=\"alignment %v\"\n    //% subcategory=\"Text styles\"\n    export function stylePropTextAlign(v: StyTextAlign): string {\n        return stylePropTextAlignImpl(v);\n    }\n\n    /**\n     * specifies the appearance of decorative lines used on text. \n     */\n    //% blockId=styleprop_text_textdecorationline\n    //% block=\"decoration %v\"\n    //% subcategory=\"Text styles\"\n    export function stylePropTextDecorationLine(v: StyTextDecorationLine): string {\n        return stylePropTextDecorationLineImpl(v);\n    }\n\n}\n",
      "test.ts": "// let s = new Sprite()\n// s.forward(10)\n// let y = s.x\n",
      "time.ts": "/**\n * Basic functionalities.\n */\n//% color=30 weight=89 icon=\"\\uf017\"\nnamespace Time {\n    /**\n     * After a certain amount of time, take some actions\n     * @param ms number of milliseconds to wait before executing, eg: 500\n     */\n    //% weight=90\n    //% blockId=set_timeout\n    //% block=\"After %ms|milliseconds\"\n    //% handlerStatement=true\n    export function afterTime(\n        ms: number,\n        body: ()=>void): void {\n        afterTimeImpl(ms, body);\n    }\n    /**\n     * Every so often, take some actions\n     * @param ms number of milliseconds to wait before executing, eg: 500\n     */\n    //% weight=80\n    //% blockId=set_interval\n    //% block=\"Every %ms|milliseconds\"\n    //% handlerStatement=true\n    export function everyTime(\n        ms: number,\n        body: ()=>void): void {\n        everyTimeImpl(ms, body);\n    }\n\n    /**\n     * Cause the application to reset\n     */\n    //% weight=70\n    //% blockId=reset_application\n    //% block=\"Reset Application\"\n    export function resetApplication(): void {\n        resetApplicationImpl();\n    }\n\n    /**\n     * When the application is reset, take some actions\n     */\n    //% weight=60\n    //% blockId=when_application_reset\n    //% block=\"When Application is Reset\"\n    export function whenAppReset(body: ()=>void): void {\n        whenAppResetImpl(body);\n    }\n\n}",
      "types.d.ts": "// declare interface StylePropertySet {\n//     rules: StyleProperty[];\n// }\n\n// declare interface StyleProperty {\n//     name:string;\n//     stringValue?:string;\n//     numberValue?:number;\n//     boolValue?:boolean;\n// }\n\ndeclare const enum UITheme {\n    //% block=calm\n    Calm,\n    //% block=bright\n    Bright,\n    //% block=wickeddahk\n    Dark\n}\ndeclare const enum UIGroupDirection {\n    //% block=column\n    Column,\n    //% block=row\n    Row,\n    //% block=reverse-column\n    ReverseColumn,\n    //% block=reverse-row\n    ReverseRow,\n}\ndeclare const enum UIGroupClass {\n    //% block=panel\n    Panel,\n    //% block=frame\n    Frame,\n    //% block=\"framed panel\"\n    Framepanel,\n    //% block=header\n    Header,\n    //% block=footer\n    Footer,\n    //% block=row\n    Row,\n    //% block=\"(none)\"\n    None\n}\ndeclare const enum UIButtonClass {\n    //% block=small\n    Small,\n    //% block=medium\n    Medium,\n    //% block=large\n    Large,\n    //% block=\"small (accented)\"\n    SmallAccent,\n    //% block=\"medium (accented)\"\n    MediumAccent,\n    //% block=\"large (accented)\"\n    LargeAccent,\n    //% block=\"(none)\"\n    None\n}\ndeclare const enum UITextClass {\n    //% block=label\n    Label,\n    //% block=button\n    Button,\n    //% block=\"button (accented)\"\n    AccentButton,\n    //% block=\"menu\"\n    Menu,\n    //% block=\"caption\"\n    Caption,\n    //% block=\"body\"\n    Body,\n    //% block=\"subtitle\"\n    Subtitle,\n    //% block=\"title\"\n    Title,\n    //% block=\"headline\"\n    Headline,\n    //% block=\"(none)\"\n    None\n}\ndeclare const enum UITextInputClass {\n    //% block=inline\n    Inline,\n    //% block=form\n    Form,\n    //% block=headline\n    Headline,\n    //% block=\"(none)\"\n    None\n}\ndeclare const enum UIDividerClass {\n    //% block=\"horizontal top\"\n    HorzTop,\n    //% block=\"horizontal bottom\"\n    HorzBottom,\n    //% block=\"vertical left\"\n    VertLeft,\n    //% block=\"vertical right\"\n    VertRight,\n    //% block=\"(none)\"\n    None\n}\n\ndeclare const enum StyAlignContent {\n    //% block=start\n    Start,\n    //% block=end\n    End,\n    //% block=center\n    Center,\n    //% block=stretch\n    Stretch,\n    //% block=\"space between\"\n    SpaceBetween,\n    //% block=\"space around\"\n    SpaceAround\n}\n\ndeclare const enum StyAlignItems {\n    //% block=start\n    start,\n    //% block=end\n    end,\n    //% block=center\n    center,\n    //% block=stretch\n    stretch,\n    //% block=baseline\n    baseline,\n}\n\ndeclare const enum StyFlexDirection {\n    //% block=row\n    row,\n    //% block=\"reverse row\"\n    rowReverse,\n    //% block=column\n    column,\n    //% block=\"reverse column\"\n    columnReverse\n}\n\ndeclare const enum StyFlexWrap {\n    //% block=yes\n    wrap,\n    //% block=no\n    nowrap\n}\n\ndeclare const enum StyPosition {\n    //% block=absolute\n    absolute,\n    //% block=relative\n    relative\n}\n\ndeclare const enum StyOffsetType {\n    //% block=bottom\n    bottom,\n    //% block=left\n    left,\n    //% block=right\n    right,\n    //% block=top\n    top,\n    //% block=z-index\n    zIndex\n}\n\ndeclare const enum StyBoxSide {\n    //% block=all\n    all,\n    //% block=bottom\n    bottom,\n    //% block=top\n    top,\n    //% block=left\n    left,\n    //% block=right\n    right\n}\n\ndeclare const enum StyBoxCorner {\n    //% block=all\n    all,\n    //% block=\"bottom left\"\n    bottomLeft,\n    //% block=\"bottom right\"\n    bottomRight,\n    //% block=\"top left\"\n    topLeft,\n    //% block=\"top right\"\n    topRight\n}\n\ndeclare const enum StyBorderStyle {\n    //% block=solid\n    solid,\n    //% block=double\n    double,\n    //% block=dotted\n    dotted,\n    //% block=dashed\n    dashed\n}\n\ndeclare const enum StyFlexType {\n    //% block=---\n    flex,\n    //% block=basis\n    basis,\n    //% block=grow\n    grow,\n    //% block=shrink\n    shrink\n}\n\ndeclare const enum StyPropSize {\n    //% block=height\n    height,\n    //% block=width\n    width,\n    //% block=\"max height\"\n    maxHeight,\n    //% block=\"max width\"\n    maxWidth,\n    //% block=\"min height\"\n    minHeight,\n    //% block=\"min width\"\n    minWidth\n}\n\ndeclare const enum StyPropMargin {\n    //% block=all\n    margin,\n    //% block=bottom\n    marginBottom,\n    //% block=horizontal\n    marginHorizontal,\n    //% block=left\n    marginLeft,\n    //% block=right\n    marginRight,\n    //% block=top\n    marginTop,\n    //% block=vertical\n    marginVertical,\n}\n\ndeclare const enum StyPropPadding {\n    //% block=all\n    padding,\n    //% block=bottom\n    paddingBottom,\n    //% block=horizontal\n    paddingHorizontal,\n    //% block=left\n    paddingLeft,\n    //% block=right\n    paddingRight,\n    //% block=top\n    paddingTop,\n    //% block=vertical\n    paddingVertical,\n}\n\ndeclare const enum StyPropOverflow {\n    //% block=visible\n    visible,\n    //% block=hidden\n    hidden,\n    //% block=scroll\n    scroll\n}\n\ndeclare const enum StyImageResizeMode {\n    //% block=cover\n    cover,\n    //% block=contain\n    contain,\n    //% block=center\n    center,\n    //% block=stretch\n    stretch,\n    //% block=repeat\n    repeat,\n}\n\ndeclare const enum StyTextFontStyle {\n    //% block=normal\n    normal,\n    //% block=italic\n    italic\n}\n\ndeclare const enum StyTextFontWeight {\n    //% block=normal\n    normal,\n    //% block=bold\n    bold,\n    //% block=100\n    fw100,\n    //% block=200\n    fw200,\n    //% block=300\n    fw300,\n    //% block=400\n    fw400,\n    //% block=500\n    fw500,\n    //% block=600\n    fw600,\n    //% block=700\n    fw700,\n    //% block=800\n    fw800,\n    //% block=900\n    fw900,\n}\n\ndeclare const enum StyTextAlign {\n    //% block=auto\n    inherit,\n    //% block=left\n    left,\n    //% block=right\n    right,\n    //% block=center\n    center,\n    //% block=justify\n    justify,\n    //% block=\"justify all\"\n    justifyAll,\n}\n\ndeclare const enum StyTextDecorationLine {\n    //% block=none\n    none,\n    //% block=underline\n    underline,\n    //% block=\"line through\"\n    lineThrough,\n    //% block=both\n    both\n}\n\ndeclare const enum IconType {\n    dark,\n    light\n}\n\ndeclare const enum ActionIconCategory {\n    threed_rotation,\n    accessibility,\n    accessible,\n    account_balance,\n    account_balance_wallet,\n    account_box,\n    account_circle,\n    add_shopping_cart,\n    alarm_add,\n    alarm,\n    alarm_off,\n    alarm_on,\n    all_out,\n    android,\n    announcement,\n    aspect_ratio,\n    assessment,\n    assignment,\n    assignment_ind,\n    assignment_late,\n    assignment_return,\n    assignment_returned,\n    assignment_turned_in,\n    autorenew,\n    backup,\n    book,\n    bookmark,\n    bookmark_border,\n    bug_report,\n    build,\n    cached,\n    camera_enhance,\n    card_giftcard,\n    card_membership,\n    card_travel,\n    change_history,\n    check_circle,\n    chrome_reader_mode,\n    class,\n    code,\n    compare_arrows,\n    copyright,\n    credit_card,\n    dashboard,\n    date_range,\n    delete,\n    delete_forever,\n    description,\n    dns,\n    done_all,\n    done,\n    donut_large,\n    donut_small,\n    eject,\n    euro_symbol,\n    event,\n    event_seat,\n    exit_to_app,\n    explore,\n    extension,\n    face,\n    favorite,\n    favorite_border,\n    feedback,\n    find_in_page,\n    find_replace,\n    fingerprint,\n    flight_land,\n    flight_takeoff,\n    flip_to_back,\n    flip_to_front,\n    g_translate,\n    gavel,\n    get_app,\n    gif,\n    grade,\n    group_work,\n    help,\n    help_outline,\n    highlight_off,\n    history,\n    home,\n    hourglass_empty,\n    hourglass_full,\n    http,\n    https,\n    important_devices,\n    info,\n    info_outline,\n    input,\n    invert_colors,\n    label,\n    label_outline,\n    language,\n    launch,\n    lightbulb_outline,\n    line_style,\n    line_weight,\n    list,\n    lock,\n    lock_open,\n    lock_outline,\n    loyalty,\n    markunread_mailbox,\n    motorcycle,\n    note_add,\n    offline_pin,\n    opacity,\n    open_in_browser,\n    open_in_new,\n    open_with,\n    pageview,\n    pan_tool,\n    payment,\n    perm_camera_mic,\n    perm_contact_calendar,\n    perm_data_setting,\n    perm_device_information,\n    perm_identity,\n    perm_media,\n    perm_phone_msg,\n    perm_scan_wifi,\n    pets,\n    picture_in_picture_alt,\n    picture_in_picture,\n    play_for_work,\n    polymer,\n    power_settings_new,\n    pregnant_woman,\n    print,\n    query_builder,\n    question_answer,\n    receipt,\n    record_voice_over,\n    redeem,\n    remove_shopping_cart,\n    reorder,\n    report_problem,\n    restore,\n    restore_page,\n    room,\n    rounded_corner,\n    rowing,\n    schedule,\n    search,\n    settings_applications,\n    settings_backup_restore,\n    settings,\n    settings_bluetooth,\n    settings_brightness,\n    settings_cell,\n    settings_ethernet,\n    settings_input_antenna,\n    settings_input_component,\n    settings_input_composite,\n    settings_input_hdmi,\n    settings_input_svideo,\n    settings_overscan,\n    settings_phone,\n    settings_power,\n    settings_remote,\n    settings_voice,\n    shop,\n    shop_two,\n    shopping_basket,\n    shopping_cart,\n    speaker_notes,\n    speaker_notes_off,\n    spellcheck,\n    stars,\n    store,\n    subject,\n    supervisor_account,\n    swap_horiz,\n    swap_vert,\n    swap_vertical_circle,\n    system_update_alt,\n    tab,\n    tab_unselected,\n    theaters,\n    thumb_down,\n    thumb_up,\n    thumbs_up_down,\n    timeline,\n    toc,\n    today,\n    toll,\n    touch_app,\n    track_changes,\n    translate,\n    trending_down,\n    trending_flat,\n    trending_up,\n    turned_in,\n    turned_in_not,\n    update,\n    verified_user,\n    view_agenda,\n    view_array,\n    view_carousel,\n    view_column,\n    view_day,\n    view_headline,\n    view_list,\n    view_module,\n    view_quilt,\n    view_stream,\n    view_week,\n    visibility,\n    visibility_off,\n    watch_later,\n    work,\n    youtube_searched_for,\n    zoom_in,\n    zoom_out,\n}\ndeclare const enum AlertIconCategory {\n    add_alert,\n    error,\n    error_outline,\n    warning,\n}\ndeclare const enum AvIconCategory {\n    add_to_queue,\n    airplay,\n    album,\n    art_track,\n    av_timer,\n    branding_watermark,\n    call_to_action,\n    closed_caption,\n    equalizer,\n    explicit,\n    fast_forward,\n    fast_rewind,\n    featured_play_list,\n    featured_video,\n    fiber_dvr,\n    fiber_manual_record,\n    fiber_new,\n    fiber_pin,\n    fiber_smart_record,\n    forward_10,\n    forward_30,\n    forward_5,\n    games,\n    hd,\n    hearing,\n    high_quality,\n    library_add,\n    library_books,\n    library_music,\n    loop,\n    mic,\n    mic_none,\n    mic_off,\n    movie,\n    music_video,\n    new_releases,\n    not_interested,\n    note,\n    pause,\n    pause_circle_filled,\n    pause_circle_outline,\n    play_arrow,\n    play_circle_filled,\n    play_circle_filled_white,\n    play_circle_outline,\n    playlist_add,\n    playlist_add_check,\n    playlist_play,\n    queue,\n    queue_music,\n    queue_play_next,\n    radio,\n    recent_actors,\n    remove_from_queue,\n    repeat,\n    repeat_one,\n    replay_10,\n    replay_30,\n    replay_5,\n    replay,\n    shuffle,\n    skip_next,\n    skip_previous,\n    slow_motion_video,\n    snooze,\n    sort_by_alpha,\n    stop,\n    subscriptions,\n    subtitles,\n    surround_sound,\n    video_call,\n    video_label,\n    video_library,\n    videocam,\n    videocam_off,\n    volume_down,\n    volume_mute,\n    volume_off,\n    volume_up,\n    web_asset,\n    web,\n}\ndeclare const enum CommunicationIconCategory {\n    business,\n    call,\n    call_end,\n    call_made,\n    call_merge,\n    call_missed,\n    call_missed_outgoing,\n    call_received,\n    call_split,\n    chat,\n    chat_bubble,\n    chat_bubble_outline,\n    clear_all,\n    comment,\n    contact_mail,\n    contact_phone,\n    contacts,\n    dialer_sip,\n    dialpad,\n    email,\n    forum,\n    import_contacts,\n    import_export,\n    invert_colors_off,\n    live_help,\n    location_off,\n    location_on,\n    mail_outline,\n    message,\n    no_sim,\n    phone,\n    phonelink_erase,\n    phonelink_lock,\n    phonelink_ring,\n    phonelink_setup,\n    portable_wifi_off,\n    present_to_all,\n    ring_volume,\n    rss_feed,\n    screen_share,\n    speaker_phone,\n    stay_current_landscape,\n    stay_current_portrait,\n    stay_primary_landscape,\n    stay_primary_portrait,\n    stop_screen_share,\n    swap_calls,\n    textsms,\n    voicemail,\n    vpn_key,\n}\ndeclare const enum ContentIconCategory {\n    add,\n    add_box,\n    add_circle,\n    add_circle_outline,\n    archive,\n    backspace,\n    block,\n    clear,\n    content_copy,\n    content_cut,\n    content_paste,\n    create,\n    delete_sweep,\n    drafts,\n    filter_list,\n    flag,\n    font_download,\n    forward,\n    gesture,\n    inbox,\n    link,\n    low_priority,\n    mail,\n    markunread,\n    move_to_inbox,\n    next_week,\n    redo,\n    remove,\n    remove_circle,\n    remove_circle_outline,\n    reply_all,\n    reply,\n    report,\n    save,\n    select_all,\n    send,\n    sort,\n    text_format,\n    unarchive,\n    undo,\n    weekend,\n}\ndeclare const enum DeviceIconCategory {\n    access_alarm,\n    access_alarms,\n    access_time,\n    add_alarm,\n    airplanemode_active,\n    airplanemode_inactive,\n    battery_20,\n    battery_30,\n    battery_50,\n    battery_60,\n    battery_80,\n    battery_90,\n    battery_alert,\n    battery_charging_20,\n    battery_charging_30,\n    battery_charging_50,\n    battery_charging_60,\n    battery_charging_80,\n    battery_charging_90,\n    battery_charging_full,\n    battery_full,\n    battery_std,\n    battery_unknown,\n    bluetooth,\n    bluetooth_connected,\n    bluetooth_disabled,\n    bluetooth_searching,\n    brightness_auto,\n    brightness_high,\n    brightness_low,\n    brightness_medium,\n    data_usage,\n    developer_mode,\n    devices,\n    dvr,\n    gps_fixed,\n    gps_not_fixed,\n    gps_off,\n    graphic_eq,\n    location_disabled,\n    location_searching,\n    network_cell,\n    network_wifi,\n    nfc,\n    screen_lock_landscape,\n    screen_lock_portrait,\n    screen_lock_rotation,\n    screen_rotation,\n    sd_storage,\n    settings_system_daydream,\n    signal_cellular_0_bar,\n    signal_cellular_1_bar,\n    signal_cellular_2_bar,\n    signal_cellular_3_bar,\n    signal_cellular_4_bar,\n    signal_cellular_connected_no_internet_0_bar,\n    signal_cellular_connected_no_internet_1_bar,\n    signal_cellular_connected_no_internet_2_bar,\n    signal_cellular_connected_no_internet_3_bar,\n    signal_cellular_connected_no_internet_4_bar,\n    signal_cellular_no_sim,\n    signal_cellular_null,\n    signal_cellular_off,\n    signal_wifi_0_bar,\n    signal_wifi_1_bar,\n    signal_wifi_1_bar_lock,\n    signal_wifi_2_bar,\n    signal_wifi_2_bar_lock,\n    signal_wifi_3_bar,\n    signal_wifi_3_bar_lock,\n    signal_wifi_4_bar,\n    signal_wifi_4_bar_lock,\n    signal_wifi_off,\n    storage,\n    usb,\n    wallpaper,\n    widgets,\n    wifi_lock,\n    wifi_tethering,\n}\ndeclare const enum EditorIconCategory {\n    attach_file,\n    attach_money,\n    border_all,\n    border_bottom,\n    border_clear,\n    border_color,\n    border_horizontal,\n    border_inner,\n    border_left,\n    border_outer,\n    border_right,\n    border_style,\n    border_top,\n    border_vertical,\n    bubble_chart,\n    drag_handle,\n    format_align_center,\n    format_align_justify,\n    format_align_left,\n    format_align_right,\n    format_bold,\n    format_clear,\n    format_color_fill,\n    format_color_reset,\n    format_color_text,\n    format_indent_decrease,\n    format_indent_increase,\n    format_italic,\n    format_line_spacing,\n    format_list_bulleted,\n    format_list_numbered,\n    format_paint,\n    format_quote,\n    format_shapes,\n    format_size,\n    format_strikethrough,\n    format_textdirection_l_to_r,\n    format_textdirection_r_to_l,\n    format_underlined,\n    functions,\n    highlight,\n    insert_chart,\n    insert_comment,\n    insert_drive_file,\n    insert_emoticon,\n    insert_invitation,\n    insert_link,\n    insert_photo,\n    linear_scale,\n    merge_type,\n    mode_comment,\n    mode_edit,\n    monetization_on,\n    money_off,\n    multiline_chart,\n    pie_chart,\n    pie_chart_outlined,\n    publish,\n    short_text,\n    show_chart,\n    space_bar,\n    strikethrough_s,\n    text_fields,\n    title,\n    vertical_align_bottom,\n    vertical_align_center,\n    vertical_align_top,\n    wrap_text,\n}\ndeclare const enum FileIconCategory {\n    attachment,\n    cloud,\n    cloud_circle,\n    cloud_done,\n    cloud_download,\n    cloud_off,\n    cloud_queue,\n    cloud_upload,\n    create_new_folder,\n    file_download,\n    file_upload,\n    folder,\n    folder_open,\n    folder_shared,\n}\ndeclare const enum HardwareIconCategory {\n    cast,\n    cast_connected,\n    computer,\n    desktop_mac,\n    desktop_windows,\n    developer_board,\n    device_hub,\n    devices_other,\n    dock,\n    gamepad,\n    headset,\n    headset_mic,\n    keyboard_arrow_down,\n    keyboard_arrow_left,\n    keyboard_arrow_right,\n    keyboard_arrow_up,\n    keyboard_backspace,\n    keyboard,\n    keyboard_capslock,\n    keyboard_hide,\n    keyboard_return,\n    keyboard_tab,\n    keyboard_voice,\n    laptop,\n    laptop_chromebook,\n    laptop_mac,\n    laptop_windows,\n    memory,\n    mouse,\n    phone_android,\n    phone_iphone,\n    phonelink,\n    phonelink_off,\n    power_input,\n    router,\n    scanner,\n    security,\n    sim_card,\n    smartphone,\n    speaker,\n    speaker_group,\n    tablet_android,\n    tablet,\n    tablet_mac,\n    toys,\n    tv,\n    videogame_asset,\n    watch,\n}\ndeclare const enum ImageIconCategory {\n    add_a_photo,\n    add_to_photos,\n    adjust,\n    assistant,\n    assistant_photo,\n    audiotrack,\n    blur_circular,\n    blur_linear,\n    blur_off,\n    blur_on,\n    brightness_1,\n    brightness_2,\n    brightness_3,\n    brightness_4,\n    brightness_5,\n    brightness_6,\n    brightness_7,\n    broken_image,\n    brush,\n    burst_mode,\n    camera_alt,\n    camera,\n    camera_front,\n    camera_rear,\n    camera_roll,\n    center_focus_strong,\n    center_focus_weak,\n    collections,\n    collections_bookmark,\n    color_lens,\n    colorize,\n    compare,\n    control_point,\n    control_point_duplicate,\n    crop_16_9,\n    crop_3_2,\n    crop_5_4,\n    crop_7_5,\n    crop,\n    crop_din,\n    crop_free,\n    crop_landscape,\n    crop_original,\n    crop_portrait,\n    crop_rotate,\n    crop_square,\n    dehaze,\n    details,\n    edit,\n    exposure,\n    exposure_neg_1,\n    exposure_neg_2,\n    exposure_plus_1,\n    exposure_plus_2,\n    exposure_zero,\n    filter_1,\n    filter_2,\n    filter_3,\n    filter_4,\n    filter_5,\n    filter_6,\n    filter_7,\n    filter_8,\n    filter_9,\n    filter_9_plus,\n    filter_b_and_w,\n    filter,\n    filter_center_focus,\n    filter_drama,\n    filter_frames,\n    filter_hdr,\n    filter_none,\n    filter_tilt_shift,\n    filter_vintage,\n    flare,\n    flash_auto,\n    flash_off,\n    flash_on,\n    flip,\n    gradient,\n    grain,\n    grid_off,\n    grid_on,\n    hdr_off,\n    hdr_on,\n    hdr_strong,\n    hdr_weak,\n    healing,\n    image_aspect_ratio,\n    image,\n    iso,\n    landscape,\n    leak_add,\n    leak_remove,\n    lens,\n    linked_camera,\n    looks_3,\n    looks_4,\n    looks_5,\n    looks_6,\n    looks,\n    looks_one,\n    looks_two,\n    loupe,\n    monochrome_photos,\n    movie_creation,\n    movie_filter,\n    music_note,\n    nature,\n    nature_people,\n    navigate_before,\n    navigate_next,\n    palette,\n    panorama,\n    panorama_fish_eye,\n    panorama_horizontal,\n    panorama_vertical,\n    panorama_wide_angle,\n    photo_album,\n    photo,\n    photo_camera,\n    photo_filter,\n    photo_library,\n    photo_size_select_actual,\n    photo_size_select_large,\n    photo_size_select_small,\n    picture_as_pdf,\n    portrait,\n    remove_red_eye,\n    rotate_90_degrees_ccw,\n    rotate_left,\n    rotate_right,\n    slideshow,\n    straighten,\n    style,\n    switch_camera,\n    switch_video,\n    tag_faces,\n    texture,\n    timelapse,\n    timer_10,\n    timer_3,\n    timer,\n    timer_off,\n    tonality,\n    transform,\n    tune,\n    view_comfy,\n    view_compact,\n    vignette,\n    wb_auto,\n    wb_cloudy,\n    wb_incandescent,\n    wb_iridescent,\n    wb_sunny,\n}\ndeclare const enum MapsIconCategory {\n    add_location,\n    beenhere,\n    directions_bike,\n    directions,\n    directions_boat,\n    directions_bus,\n    directions_car,\n    directions_railway,\n    directions_run,\n    directions_subway,\n    directions_transit,\n    directions_walk,\n    edit_location,\n    ev_station,\n    flight,\n    hotel,\n    layers,\n    layers_clear,\n    local_activity,\n    local_airport,\n    local_atm,\n    local_bar,\n    local_cafe,\n    local_car_wash,\n    local_convenience_store,\n    local_dining,\n    local_drink,\n    local_florist,\n    local_gas_station,\n    local_grocery_store,\n    local_hospital,\n    local_hotel,\n    local_laundry_service,\n    local_library,\n    local_mall,\n    local_movies,\n    local_offer,\n    local_parking,\n    local_pharmacy,\n    local_phone,\n    local_pizza,\n    local_play,\n    local_post_office,\n    local_printshop,\n    local_see,\n    local_shipping,\n    local_taxi,\n    map,\n    my_location,\n    navigation,\n    near_me,\n    person_pin,\n    person_pin_circle,\n    pin_drop,\n    place,\n    rate_review,\n    restaurant,\n    restaurant_menu,\n    satellite,\n    store_mall_directory,\n    streetview,\n    subway,\n    terrain,\n    traffic,\n    train,\n    tram,\n    transfer_within_a_station,\n    zoom_out_map,\n}\ndeclare const enum NavigationIconCategory {\n    apps,\n    arrow_back,\n    arrow_downward,\n    arrow_drop_down,\n    arrow_drop_down_circle,\n    arrow_drop_up,\n    arrow_forward,\n    arrow_upward,\n    cancel,\n    check,\n    chevron_left,\n    chevron_right,\n    close,\n    expand_less,\n    expand_more,\n    first_page,\n    fullscreen,\n    fullscreen_exit,\n    last_page,\n    menu,\n    more_horiz,\n    more_vert,\n    refresh,\n    subdirectory_arrow_left,\n    subdirectory_arrow_right,\n    unfold_less,\n    unfold_more,\n}\ndeclare const enum NotificationIconCategory {\n    adb,\n    airline_seat_flat_angled,\n    airline_seat_flat,\n    airline_seat_individual_suite,\n    airline_seat_legroom_extra,\n    airline_seat_legroom_normal,\n    airline_seat_legroom_reduced,\n    airline_seat_recline_extra,\n    airline_seat_recline_normal,\n    bluetooth_audio,\n    confirmation_number,\n    disc_full,\n    do_not_disturb_alt,\n    do_not_disturb,\n    do_not_disturb_off,\n    do_not_disturb_on,\n    drive_eta,\n    enhanced_encryption,\n    event_available,\n    event_busy,\n    event_note,\n    folder_special,\n    live_tv,\n    mms,\n    more,\n    network_check,\n    network_locked,\n    no_encryption,\n    ondemand_video,\n    personal_video,\n    phone_bluetooth_speaker,\n    phone_forwarded,\n    phone_in_talk,\n    phone_locked,\n    phone_missed,\n    phone_paused,\n    power,\n    priority_high,\n    rv_hookup,\n    sd_card,\n    sim_card_alert,\n    sms,\n    sms_failed,\n    sync,\n    sync_disabled,\n    sync_problem,\n    system_update,\n    tap_and_play,\n    time_to_leave,\n    vibration,\n    voice_chat,\n    vpn_lock,\n    wc,\n    wifi,\n}\ndeclare const enum PlacesIconCategory {\n    ac_unit,\n    airport_shuttle,\n    all_inclusive,\n    beach_access,\n    business_center,\n    casino,\n    child_care,\n    child_friendly,\n    fitness_center,\n    free_breakfast,\n    golf_course,\n    hot_tub,\n    kitchen,\n    pool,\n    room_service,\n    rv_hookup,\n    smoke_free,\n    smoking_rooms,\n    spa,\n}\ndeclare const enum SocialIconCategory {\n    cake,\n    domain,\n    group_add,\n    group,\n    location_city,\n    mood_bad,\n    mood,\n    notifications_active,\n    notifications,\n    notifications_none,\n    notifications_off,\n    notifications_paused,\n    pages,\n    party_mode,\n    people,\n    people_outline,\n    person_add,\n    person,\n    person_outline,\n    plus_one,\n    poll,\n    public,\n    school,\n    sentiment_dissatisfied,\n    sentiment_neutral,\n    sentiment_satisfied,\n    sentiment_very_dissatisfied,\n    sentiment_very_satisfied,\n    share,\n    whatshot,\n}\ndeclare const enum ToggleIconCategory {\n    star,\n    star_border,\n    star_half,\n}",
      "ui.ts": "\n/**\n * Basic functionalities.\n */\n//% color=#935BA5 weight=100 icon=\"\\uf2d0\"\nnamespace UI {\n    /**\n     * The User Interface goes inside this\n     * @param theme the general look of various UI elements, eg: UITheme.Calm\n    **/\n    //% weight=100\n    //% color=#935BA5\n    //% blockId=user_interface\n    //% block=\"UI theme %theme\"\n    export function userInterface(theme: UITheme, body: () => void) {\n        userInterfaceImpl(theme, body);\n    }\n    /**\n      * An element for grouping other elements\n      */\n    //% weight=90\n    //% color=#5B6DA5\n    //% blockId=group_element\n    //% block=\"GROUP id %name|dir %direction|flex %flex|class %className|style %style=lists_create_empty\"\n    //% handlerStatement=true\n    //% externallyLoadedBlock=true\n    //% name.fieldEditor=\"text\" name.fieldOptions.onParentBlock=true name.fieldOptions.decompileLiterals=true\n    //% flex.fieldEditor=\"checkbox\" flex.fieldOptions.onParentBlock=true flex.fieldOptions.decompileLiterals=true\n    export function groupElement(\n        name: string,\n        direction: UIGroupDirection,\n        flex: boolean,\n        className: UIGroupClass,\n        style: string[],\n        children: Action): void {\n        groupElementImpl(name, direction, flex, className, style, children);\n    }\n\n    /**\n      * An element for grouping other elements in a scrollable region\n      */\n    //% weight=30\n    //% color=#80A55B\n    //% blockId=scroller_element\n    //% block=\"SCROLLER id %name|flex %flex|class %className|horizontal? %horz|style %style=lists_create_empty\"\n    //% handlerStatement=true\n    //% externallyLoadedBlock=true\n    //% name.fieldEditor=\"text\" name.fieldOptions.onParentBlock=true name.fieldOptions.decompileLiterals=true\n    //% flex.fieldEditor=\"checkbox\" flex.fieldOptions.onParentBlock=true flex.fieldOptions.decompileLiterals=true\n    //% horz.fieldEditor=\"checkbox\" horz.fieldOptions.onParentBlock=true horz.fieldOptions.decompileLiterals=true\n    export function scrollerElement(\n        name: string,\n        flex: boolean,\n        className: UIGroupClass,\n        horz: boolean,\n        style: string[],\n        children: Action): void {\n        scrollerElementImpl(name, flex, className, horz, style, children);\n    }\n\n    /**\n     * A block for making a button\n     */\n    //% weight=70\n    //% color=#80A55B\n    //% blockId=button_element\n    //% block=\"BUTTON id %name|flex %flex|class %className|style %style=lists_create_empty\"\n    //% externallyLoadedBlock=true\n    //% name.fieldEditor=\"text\" name.fieldOptions.onParentBlock=true name.fieldOptions.decompileLiterals=true\n    //% flex.fieldEditor=\"checkbox\" flex.fieldOptions.onParentBlock=true flex.fieldOptions.decompileLiterals=true\n    //% handlerStatement=true\n    export function buttonElement(\n        name: string,\n        flex: boolean,\n        className: UIButtonClass,\n        style: string[],\n        children: () => void,\n        whenPressed: () => void): void {\n        buttonElementImpl(name, flex, className, style, children, whenPressed);\n    }\n\n    /**\n     * A block for making a text element\n     * @param value the text to display, eg:Lorem Ipsum\n     */\n    //% weight=80\n    //% color=#805BA5\n    //% blockId=text_element\n    //% block=\"TEXT flex %flex|class %className|%value|style %style=lists_create_empty\"\n    //% externallyLoadedBlock=true\n    //% name.fieldEditor=\"text\" name.fieldOptions.onParentBlock=true name.fieldOptions.decompileLiterals=true\n    //% flex.fieldEditor=\"checkbox\" flex.fieldOptions.onParentBlock=true flex.fieldOptions.decompileLiterals=true\n    export function textElement(\n        flex: boolean,\n        className: UITextClass,\n        value: string,\n        style: string[]): void {\n        textElementImpl(flex, className, style, value);\n    }\n\n    export class WhenTextChangesArgs {\n        text: string;\n    }\n    /**\n     * A block for making a text input element\n     */\n    //% weight=50\n    //% color=#A55B93\n    //% blockId=textinput_element\n    //% block=\"TEXT INPUT id %name|flex %flex|class %className|style %style=lists_create_empty|initial %initialValue| when text changes\"\n    //% handlerStatement=true\n    //% mutate=objectdestructuring\n    //% mutateText=\"new text\"\n    //% mutateDefaults=\"text\"\n    export function textInputElement(\n        name: string,\n        flex: boolean,\n        className: UITextInputClass,\n        style: string[],\n        initialValue: string,\n        whenTextChanges: (args: WhenTextChangesArgs) => void): void {\n\n        textInputElementImpl(name, flex, className, style, initialValue, (t) => {\n            let args = new WhenTextChangesArgs();\n            args.text = t;\n            whenTextChanges(args);\n        });\n    }\n\n    /**\n     * A block for making a image element\n     * @param width the width of the image, eg: 80\n     * @param height the height of the image, eg: 60\n     */\n    //% weight=60\n    //% color=#5BA5A5\n    //% blockId=image_element\n    //% block=\"IMAGE flex %flex|width %width|height %height|URL %url|style %style=lists_create_empty\"\n    export function imageElement(\n        flex: boolean,\n        width: number,\n        height: number,\n        url: string,\n        style: string[]): void {\n        imageElementImpl(flex, width, height, style, url);\n    }\n\n    /**\n     * A block for making a divider element\n     */\n    //% weight=40\n    //% color=#A55B5B\n    //% blockId=divider_element\n    //% block=\"DIVIDER class %className|style %style=lists_create_empty\"\n    export function dividerElement(\n        className: UIDividerClass,\n        style: string[]): void {\n        dividerElementImpl(className, style);\n    }\n\n    /**\n     * Cause the UI to update\n    **/\n    //% weight=20\n    //% blockId=update_ui\n    //% block=\"Update UI\"\n    export function updateUI() {\n        updateUIImpl();\n    }\n\n    /**\n     * Action Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_action\n    //% block=\"Action Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function actionIcon(name: ActionIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('action', name, type, size, style);\n    }\n\n    /**\n     * Alert Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_alert\n    //% block=\"Alert Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function alert(name: AlertIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('alert', name, type, size, style);\n    }\n\n    /**\n     * A/V Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_av\n    //% block=\"A/V Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function avIcon(name: AvIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('av', name, type, size, style);\n    }\n\n    /**\n     * Communication Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_communication\n    //% block=\"Communication Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function communicationIcon(name: CommunicationIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('communication', name, type, size, style);\n    }\n\n    /**\n     * Content Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_content\n    //% block=\"Content Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function contentIcon(name: ContentIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('content', name, type, size, style);\n    }\n\n    /**\n     * Device Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_device\n    //% block=\"Device Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function deviceIcon(name: DeviceIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('device', name, type, size, style);\n    }\n\n    /**\n     * Editor Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_editor\n    //% block=\"Editor Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function editorIcon(name: EditorIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('editor', name, type, size, style);\n    }\n\n    /**\n     * File Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_file\n    //% block=\"File Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function fileIcon(name: FileIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('file', name, type, size, style);\n    }\n\n    /**\n     * Hardware Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_hardware\n    //% block=\"Hardware Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function hardwareIcon(name: HardwareIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('hardware', name, type, size, style);\n    }\n\n    /**\n     * Image Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_image\n    //% block=\"Image Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function imageIcon(name: ImageIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('image', name, type, size, style);\n    }\n\n    /**\n     * Maps Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_maps\n    //% block=\"Maps Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function mapsIcon(name: MapsIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('maps', name, type, size, style);\n    }\n\n    /**\n     * Navigation Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_navigation\n    //% block=\"Navigation Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function navigationIcon(name: NavigationIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('navigation', name, type, size, style);\n    }\n\n    /**\n     * Notification Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_notification\n    //% block=\"Notification Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function notificationIcon(name: NotificationIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('notification', name, type, size, style);\n    }\n\n    /**\n     * Places Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_places\n    //% block=\"Places Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function placesIcon(name: PlacesIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('places', name, type, size, style);\n    }\n\n    /**\n     * Social Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_social\n    //% block=\"Social Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function socialIcon(name: SocialIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('social', name, type, size, style);\n    }\n\n    /**\n     * Toggle Icon\n     * @param size the size of the icon, eg: 24\n     */\n    //% subcategory=Icons\n    //% color=#93A55B\n    //% blockId=icon_toggle\n    //% block=\"Toggle Icon %name|size %size|%type|style %style=lists_create_empty\"\n    export function toggleIcon(name: ToggleIconCategory, size: number, type: IconType, style: string[]) {\n        iconElementImpl('toggle', name, type, size, style);\n    }\n\n}\n"
    }
  },
  "compile": {
    "isNative": false,
    "hasHex": false,
    "floatingPoint": true
  },
  "versions": {
    "target": "0.1.0",
    "pxt": "1.8.20"
  }
}