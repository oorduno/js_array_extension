## Functions

<dl>
<dt><a href="#each">each(callback)</a></dt>
<dd><p>Execute the callback function against every element in the collection</p>
</dd>
<dt><a href="#where">where(callback)</a> ⇒ <code>array</code></dt>
<dd><p>Creates a new array that contains all elements that
satisfies the given callback function</p>
</dd>
<dt><a href="#any">any(spec)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if any of the elements in the array satisfies
the given spec</p>
</dd>
<dt><a href="#select">select(spec)</a> ⇒ <code>array</code></dt>
<dd><p>Creates a new collection containing the elements returned by
the spec function</p>
</dd>
<dt><a href="#take">take(howMany, [spec])</a> ⇒ <code>array</code></dt>
<dd><p>Creates a new collection containing &#39;howMany&#39; elements</p>
</dd>
<dt><a href="#skip">skip(howMany)</a> ⇒ <code>array</code></dt>
<dd><p>Produces new Array which will not include the first &#39;howMany&#39; elements</p>
</dd>
<dt><a href="#first">first([spec])</a> ⇒ <code>*</code> | <code>null</code></dt>
<dd><p>Returns the first element that statisfies the spec, if there is no
spec then it will return the first array&#39;s element.</p>
</dd>
<dt><a href="#last">last([spec])</a> ⇒ <code>*</code> | <code>null</code></dt>
<dd><p>Returns the last array&#39;s element that satisfies the given spec</p>
</dd>
<dt><a href="#count">count([spec])</a> ⇒ <code>number</code></dt>
<dd><p>Returns the number of elements that satisfies the spec</p>
</dd>
<dt><a href="#index">index(spec)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the zero based position in the array fo the element that
satisfies the spec.</p>
</dd>
<dt><a href="#pluck">pluck(property)</a> ⇒ <code>array</code></dt>
<dd><p>Returns a new array containing the &#39;property&#39; values</p>
</dd>
<dt><a href="#sum">sum([spec])</a> ⇒ <code>number</code> | <code>string</code></dt>
<dd><p>Returns the summatory of the result of executing the spec function
on each array&#39;s element.</p>
</dd>
<dt><a href="#max">max([comparer])</a> ⇒ <code>null</code> | <code>number</code> | <code>string</code></dt>
<dd><p>Returns the maximum value in the collection.</p>
</dd>
<dt><a href="#min">min([comparer])</a> ⇒ <code>null</code> | <code>number</code> | <code>string</code></dt>
<dd><p>Returns the minimum value in the collection.</p>
</dd>
<dt><a href="#flatten">flatten()</a> ⇒ <code>Array</code></dt>
<dd><p>Returns a new flat array, un-nesting arrays within other arrays.</p>
</dd>
</dl>

<a name="each"></a>

## each(callback)
Execute the callback function against every element in the collection

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback function to execute against every element in th collection |

<a name="where"></a>

## where(callback) ⇒ <code>array</code>
Creates a new array that contains all elements that
satisfies the given callback function

**Kind**: global function  
**Returns**: <code>array</code> - New collection with the elements that matched the
callback function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback to decide new elements |

<a name="any"></a>

## any(spec) ⇒ <code>boolean</code>
Returns true if any of the elements in the array satisfies
the given spec

**Kind**: global function  
**Returns**: <code>boolean</code> - If any of the elements matched the spec function  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>function</code> \| <code>\*</code> | Function tested for each element in the array |

<a name="select"></a>

## select(spec) ⇒ <code>array</code>
Creates a new collection containing the elements returned by
the spec function

**Kind**: global function  
**Returns**: <code>array</code> - New collection containing the elements 
returned by the spec function  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>function</code> | Function that returns the new elements |

<a name="take"></a>

## take(howMany, [spec]) ⇒ <code>array</code>
Creates a new collection containing 'howMany' elements

**Kind**: global function  
**Returns**: <code>array</code> - New collection containing 'howMany' elements
matched the spec criteria  

| Param | Type | Description |
| --- | --- | --- |
| howMany | <code>number</code> | Defines how many elements the the new collection will have |
| [spec] | <code>function</code> | Function that defines the criteria for the new collection elements. If not defined, returns 'howMany' elements for the new collection |

<a name="skip"></a>

## skip(howMany) ⇒ <code>array</code>
Produces new Array which will not include the first 'howMany' elements

**Kind**: global function  
**Returns**: <code>array</code> - New collection which not includes the first 'howMany' elements  

| Param | Type | Description |
| --- | --- | --- |
| howMany | <code>number</code> | Defines 'howMany' elements to skip for the new collection |

<a name="first"></a>

## first([spec]) ⇒ <code>\*</code> \| <code>null</code>
Returns the first element that statisfies the spec, if there is no
spec then it will return the first array's element.

**Kind**: global function  
**Returns**: <code>\*</code> \| <code>null</code> - First element that matched the spec criteria.
Null in case that none element matched or if the collection is empty.  

| Param | Type | Description |
| --- | --- | --- |
| [spec] | <code>function</code> | Function that defines the criteria for the element returned. If not present, return the first array element. |

<a name="last"></a>

## last([spec]) ⇒ <code>\*</code> \| <code>null</code>
Returns the last array's element that satisfies the given spec

**Kind**: global function  
**Returns**: <code>\*</code> \| <code>null</code> - Last element that matched the spec criteria.
Null in case that none element matched or if the collection is empty.  

| Param | Type | Description |
| --- | --- | --- |
| [spec] | <code>function</code> | Function that defines the criteria for the element returned. If not present, return the last array element. |

<a name="count"></a>

## count([spec]) ⇒ <code>number</code>
Returns the number of elements that satisfies the spec

**Kind**: global function  
**Returns**: <code>number</code> - Number of elements that satisfies the spec criteria.  

| Param | Type | Description |
| --- | --- | --- |
| [spec] | <code>function</code> | Function that defines the criteria for the count result. If not present, returns the array's length property. |

<a name="index"></a>

## index(spec) ⇒ <code>number</code>
Returns the zero based position in the array fo the element that
satisfies the spec.

**Kind**: global function  
**Returns**: <code>number</code> - Zero based position of the element that satisfy
the spec criteria. -1 if no element matched.  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>function</code> \| <code>Object</code> | Function that defines the criteria for the index result. |

<a name="pluck"></a>

## pluck(property) ⇒ <code>array</code>
Returns a new array containing the 'property' values

**Kind**: global function  
**Returns**: <code>array</code> - New collection containing the property values
of the input array.  

| Param | Type | Description |
| --- | --- | --- |
| property | <code>string</code> | Name of the property to retrieve the values for the new array |

<a name="sum"></a>

## sum([spec]) ⇒ <code>number</code> \| <code>string</code>
Returns the summatory of the result of executing the spec function
on each array's element.

**Kind**: global function  
**Returns**: <code>number</code> \| <code>string</code> - Result of the summatory of executing the
spec function on each array's element.  

| Param | Type | Description |
| --- | --- | --- |
| [spec] | <code>function</code> | Function that defines the value for the summatory result. If not present, returns the summatory of the  array elements. |

<a name="max"></a>

## max([comparer]) ⇒ <code>null</code> \| <code>number</code> \| <code>string</code>
Returns the maximum value in the collection.

**Kind**: global function  
**Returns**: <code>null</code> \| <code>number</code> \| <code>string</code> - Returns the max value in the collection,
null for empty arrays.  

| Param | Type | Description |
| --- | --- | --- |
| [comparer] | <code>function</code> | Function that receives two parameter to compare. |

<a name="min"></a>

## min([comparer]) ⇒ <code>null</code> \| <code>number</code> \| <code>string</code>
Returns the minimum value in the collection.

**Kind**: global function  
**Returns**: <code>null</code> \| <code>number</code> \| <code>string</code> - Returns the min value in the collection,
null for empty arrays.  

| Param | Type | Description |
| --- | --- | --- |
| [comparer] | <code>function</code> | Function that receives two parameter to compare. |

<a name="flatten"></a>

## flatten() ⇒ <code>Array</code>
Returns a new flat array, un-nesting arrays within other arrays.

**Kind**: global function  
**Returns**: <code>Array</code> - New flat array  
