(function() {var implementors = {};
implementors["openmls"] = [{"text":"impl From&lt;String&gt; for ErrorString","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ str&gt; for ErrorString","synthetic":false,"types":[]},{"text":"impl From&lt;Vec&lt;u8&gt;&gt; for ErrorPayload","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ [u8]&gt; for ErrorPayload","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ CiphersuiteName&gt; for u16","synthetic":false,"types":[]},{"text":"impl From&lt;CiphersuiteName&gt; for SignatureScheme","synthetic":false,"types":[]},{"text":"impl From&lt;Vec&lt;u8&gt;&gt; for Secret","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ [u8]&gt; for Secret","synthetic":false,"types":[]},{"text":"impl From&lt;ConfigError&gt; for CodecError","synthetic":false,"types":[]},{"text":"impl From&lt;PersistentConfig&gt; for Config","synthetic":false,"types":[]},{"text":"impl From&lt;ConfigError&gt; for CredentialError","synthetic":false,"types":[]},{"text":"impl From&lt;CryptoError&gt; for CredentialError","synthetic":false,"types":[]},{"text":"impl From&lt;MLSCredentialType&gt; for Credential","synthetic":false,"types":[]},{"text":"impl From&lt;ErrorString&gt; for ExtensionError","synthetic":false,"types":[]},{"text":"impl From&lt;CapabilitiesExtensionError&gt; for ExtensionError","synthetic":false,"types":[]},{"text":"impl From&lt;LifetimeExtensionError&gt; for ExtensionError","synthetic":false,"types":[]},{"text":"impl From&lt;KeyPackageIdError&gt; for ExtensionError","synthetic":false,"types":[]},{"text":"impl From&lt;ParentHashError&gt; for ExtensionError","synthetic":false,"types":[]},{"text":"impl From&lt;RatchetTreeError&gt; for ExtensionError","synthetic":false,"types":[]},{"text":"impl From&lt;CodecError&gt; for ExtensionError","synthetic":false,"types":[]},{"text":"impl From&lt;ConfigError&gt; for ExtensionError","synthetic":false,"types":[]},{"text":"impl From&lt;InvalidExtensionError&gt; for ExtensionError","synthetic":false,"types":[]},{"text":"impl From&lt;MLSPlaintextError&gt; for MLSCiphertextError","synthetic":false,"types":[]},{"text":"impl From&lt;SecretTreeError&gt; for MLSCiphertextError","synthetic":false,"types":[]},{"text":"impl From&lt;CodecError&gt; for MLSCiphertextError","synthetic":false,"types":[]},{"text":"impl From&lt;CodecError&gt; for VerificationError","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ MLSPlaintextContentType&gt; for ContentType","synthetic":false,"types":[]},{"text":"impl From&lt;Vec&lt;u8&gt;&gt; for Mac","synthetic":false,"types":[]},{"text":"impl From&lt;Mac&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a ConfirmationTag&gt; for MLSPlaintextCommitAuthData&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;MLSCiphertextError&gt; for GroupError","synthetic":false,"types":[]},{"text":"impl From&lt;WelcomeError&gt; for GroupError","synthetic":false,"types":[]},{"text":"impl From&lt;ApplyCommitError&gt; for GroupError","synthetic":false,"types":[]},{"text":"impl From&lt;CreateCommitError&gt; for GroupError","synthetic":false,"types":[]},{"text":"impl From&lt;ConfigError&gt; for GroupError","synthetic":false,"types":[]},{"text":"impl From&lt;ExporterError&gt; for GroupError","synthetic":false,"types":[]},{"text":"impl From&lt;ProposalQueueError&gt; for GroupError","synthetic":false,"types":[]},{"text":"impl From&lt;CodecError&gt; for GroupError","synthetic":false,"types":[]},{"text":"impl From&lt;TreeError&gt; for WelcomeError","synthetic":false,"types":[]},{"text":"impl From&lt;CryptoError&gt; for WelcomeError","synthetic":false,"types":[]},{"text":"impl From&lt;CodecError&gt; for WelcomeError","synthetic":false,"types":[]},{"text":"impl From&lt;VerificationError&gt; for ApplyCommitError","synthetic":false,"types":[]},{"text":"impl From&lt;TreeError&gt; for ApplyCommitError","synthetic":false,"types":[]},{"text":"impl From&lt;CodecError&gt; for ApplyCommitError","synthetic":false,"types":[]},{"text":"impl From&lt;ErrorString&gt; for ManagedGroupError","synthetic":false,"types":[]},{"text":"impl From&lt;CodecError&gt; for ManagedGroupError","synthetic":false,"types":[]},{"text":"impl From&lt;ConfigError&gt; for ManagedGroupError","synthetic":false,"types":[]},{"text":"impl From&lt;GroupError&gt; for ManagedGroupError","synthetic":false,"types":[]},{"text":"impl From&lt;CreateCommitError&gt; for ManagedGroupError","synthetic":false,"types":[]},{"text":"impl From&lt;UseAfterEviction&gt; for ManagedGroupError","synthetic":false,"types":[]},{"text":"impl From&lt;PendingProposalsError&gt; for ManagedGroupError","synthetic":false,"types":[]},{"text":"impl From&lt;ExporterError&gt; for ManagedGroupError","synthetic":false,"types":[]},{"text":"impl From&lt;EmptyInputError&gt; for ManagedGroupError","synthetic":false,"types":[]},{"text":"impl From&lt;ErrorPayload&gt; for InvalidMessageError","synthetic":false,"types":[]},{"text":"impl From&lt;ErrorString&gt; for InvalidMessageError","synthetic":false,"types":[]},{"text":"impl From&lt;ApplyCommitError&gt; for InvalidMessageError","synthetic":false,"types":[]},{"text":"impl From&lt;GroupError&gt; for InvalidMessageError","synthetic":false,"types":[]},{"text":"impl From&lt;MLSPlaintext&gt; for MLSMessage","synthetic":false,"types":[]},{"text":"impl From&lt;MLSCiphertext&gt; for MLSMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ExtensionError&gt; for KeyPackageError","synthetic":false,"types":[]},{"text":"impl From&lt;ConfigError&gt; for KeyPackageError","synthetic":false,"types":[]},{"text":"impl From&lt;QueuedProposalError&gt; for ProposalQueueError","synthetic":false,"types":[]},{"text":"impl From&lt;ProposalOrRefTypeError&gt; for CodecError","synthetic":false,"types":[]},{"text":"impl From&lt;ConfirmationTag&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;Vec&lt;u8&gt;&gt; for ConfirmationTag","synthetic":false,"types":[]},{"text":"impl From&lt;CryptoError&gt; for TreeError","synthetic":false,"types":[]},{"text":"impl From&lt;u32&gt; for NodeIndex","synthetic":false,"types":[]},{"text":"impl From&lt;usize&gt; for NodeIndex","synthetic":false,"types":[]},{"text":"impl From&lt;LeafIndex&gt; for NodeIndex","synthetic":false,"types":[]},{"text":"impl From&lt;u32&gt; for LeafIndex","synthetic":false,"types":[]},{"text":"impl From&lt;usize&gt; for LeafIndex","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ ContentType&gt; for SecretType","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ MLSPlaintext&gt; for SecretType","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()